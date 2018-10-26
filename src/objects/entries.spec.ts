import { entries } from './entries';

describe('entries', () => {
  it('works on objects', () => {
    expect(entries({})).toEqual([]);
    expect(entries({ a: 4 })).toEqual([['a', 4]]);
    expect(entries({ a: 4, b: 6 })).toEqual([['a', 4], ['b', 6]]);
  });

  it('works on maps', () => {
    expect(entries(new Map([]))).toEqual([]);
    expect(entries(new Map([['a', 4], ['9', 12]]))).toEqual([['a', 4], ['9', 12]]);
  });

  it('works on sets', () => {
    expect(entries(new Set([]))).toEqual([]);
    expect(entries(new Set([1, 2, 4, 4]))).toEqual([[1, 1], [2, 2], [4, 4]]);
  });

  it('works on arrays', () => {
    expect(entries([])).toEqual([]);
    expect(entries([1, 2])).toEqual([[0, 1], [1, 2]]);
  });

  it('does not work on other things', () => {
    expect(entries(2)).toEqual([]);
    expect(entries(null)).toEqual([]);
    expect(entries('Hello')).toEqual([]);
  });
});
