import { cloneDeep } from '../utils/clone';
import { isEqual } from './isEqual';
import { toList } from '../immutable/list/index';

describe('isEqual', () => {
  it('works on obj', () => {
    const obj = { a: { foo: 'bar' } };
    const clone = cloneDeep(obj);
    expect(isEqual(obj, clone)).toBe(true);
    expect(isEqual(obj, { a: 'bar' })).toBe(false);
    expect(isEqual(obj, null)).toBe(false);
  });

  it('works on primitives', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual(4, 4)).toBe(true);
    expect(isEqual(true, true)).toBe(true);
  });

  it('works on sets', () => {
    expect(isEqual(new Set([1, 2, 3]), new Set([3, 3, 1, 1, 3, 2, 1]))).toBe(true);
    expect(isEqual(new Set([1, 2, 33, 3]), new Set([3, 3, 1, 1, 3, 2, 1]))).toBe(false);
    expect(isEqual(new Set([1]), {})).toBe(false);
    expect(isEqual(new Set([1, 2, 4]), new Set([1, 2, 3]))).toBe(false);
  });

  it('works on maps', () => {
    expect(isEqual(new Map([[1, 2], [3, 4]]), new Map([[3, 4], [1, 2]]))).toBe(true);
    expect(isEqual(new Map([[1, 2], [3, 4]]), new Map([[3, 5], [1, 2]]))).toBe(false);
    expect(isEqual(new Map([[1, 2], [3, 4]]), new Map([[4, 4], [1, 2]]))).toBe(false);
    expect(isEqual(new Map([[1, 2], [3, 4]]), new Map([[3, 4], [1, 2], [4, 5]]))).toBe(false);
    expect(isEqual(new Map([[1, 2], [3, 4], [4, 5]]), new Map([[3, 4], [1, 2]]))).toBe(false);
    expect(isEqual(new Map([[1, 2], [3, 4]]), { 1: 2, 3: 4 })).toBe(false);
  });

  it('works on lists', () => {
    expect(isEqual(toList([1, 2, 3]), toList([1, 2, 3]))).toBe(true);
    expect(isEqual(toList([1, 2, 3]), toList([1, 2, 4]))).toBe(false);
    expect(isEqual(toList([1, 2, 3]), [1, [2, [3, []]]])).toBe(true);
    expect(isEqual([1, [2, [3, []]]], toList([1, 2, 3]))).toBe(true);

    expect(isEqual(toList([1, 2, 3]), [1, [2, [4, []]]])).toBe(false);
    expect(isEqual([1, [2, [4, []]]], toList([1, 2, 3]))).toBe(false);
    expect(isEqual(toList([1, 2, 3]), {})).toBe(false);
  });

  it('works on iterables', () => {
    expect(isEqual(toList([1, 2, 3]), [1, 2, 3])).toBe(true);
    expect(
      isEqual(
        [1, 2, 3],
        (function*() {
          return yield* [1, 2, 3];
        })()
      )
    ).toBe(true);
  });

  it('works on buffers', () => {
    const b1 = Buffer.from('hello world', 'utf8');
    const b2 = Buffer.from('hello world', 'utf8');
    const b3 = Buffer.from('hola', 'utf8');
    expect(isEqual(b1, b2)).toBe(true);
    expect(isEqual(b1, b3)).toBe(false);
    expect(isEqual(b1, 4)).toBe(false);
    expect(isEqual(b1, null)).toBe(false);
  });

  it('works on arrays', () => {
    const arr = [{ foo: 'bar' }];
    const clone = cloneDeep(arr);
    expect(isEqual(arr, clone)).toBe(true);
    expect(isEqual(arr, 4)).toBe(false);
    expect(isEqual(arr, {})).toBe(false);
    expect(isEqual(arr, [4, 5])).toBe(false);
    expect(isEqual(arr, [{ foo: 'baz' }])).toBe(false);
    expect(isEqual(arr, [{ foo: 'bar' }])).toBe(true);
  });
});
