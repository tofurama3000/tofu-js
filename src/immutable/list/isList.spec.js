import { isList } from './isList';
import { toList } from './impl';

describe('Immutable List isList', () => {
  it('can detect lists', () => {
    expect(isList(toList(5))).toBe(true);
    expect(isList(toList([1, 2, 3, 4]))).toBe(true);
    expect(isList(toList([1, 2, 3, 4]).drop(3))).toBe(true);
    expect(isList(toList([1, 2, 3, 4]).drop(4))).toBe(true);
  });

  it('can detect non-lists', () => {
    expect(isList([1, [2, [3, []]]])).toBe(false);
    expect(isList('')).toBe(false);
    expect(isList({})).toBe(false);
    expect(isList(() => {})).toBe(false);
    expect(isList(23)).toBe(false);
    expect(isList(0)).toBe(false);
    expect(isList(null)).toBe(false);
    expect(isList(undefined)).toBe(false);
    expect(isList(true)).toBe(false);
    expect(isList(false)).toBe(false);
  });
});
