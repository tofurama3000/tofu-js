import { entries } from './entries';
import { toList } from '../immutable/list';

describe('entries', () => {
  it('works on obj', () => {
    expect(entries({})).toEqual([]);
    expect(entries({ a: 4 })).toEqual([['a', 4]]);
    expect(entries({ a: 4, b: 6 })).toEqual([
      ['a', 4],
      ['b', 6]
    ]);
  });

  it('works with symbol properties', () => {
    const a = Symbol('a')
    const b = Symbol('b')
    expect(entries({ [a]: 4 })).toEqual([[a, 4]]);
    expect(entries({ [a]: 4, [b]: 6 })).toEqual([
      [a, 4],
      [b, 6]
    ]);
  });

  it('works on maps', () => {
    expect(entries(new Map([]))).toEqual([]);
    expect(
      entries(
        new Map([
          ['a', 4],
          ['9', 12]
        ])
      )
    ).toEqual([
      ['a', 4],
      ['9', 12]
    ]);
  });

  it('works on sets', () => {
    expect(entries(new Set([]))).toEqual([]);
    expect(entries(new Set([1, 2, 4, 4]))).toEqual([
      [1, 1],
      [2, 2],
      [4, 4]
    ]);
  });

  it('works on iterables', () => {
    expect(entries([])).toEqual([]);
    expect(entries([1, 2])).toEqual([
      [0, 1],
      [1, 2]
    ]);
    expect(entries(toList([1, 2, 3]))).toEqual([
      [0, 1],
      [1, 2],
      [2, 3]
    ]);
  });

  it('does not work on other things', () => {
    expect(entries(2)).toEqual([]);
    expect(entries(null)).toEqual([]);
    expect(entries('Hello')).toEqual([]);
  });
});
