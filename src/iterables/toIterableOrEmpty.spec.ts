import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToArray } from './collectToArray';

describe('toIterableOrEmpty', () => {
  it('passes iterables through', () => {
    const iter = [1, 2, 3];
    expect(toIterableOrEmpty(iter)).toBe(iter); // reference should be the same
  });

  it('returns an empty iterable if given a non iterable', () => {
    expect(collectToArray(toIterableOrEmpty(undefined))).toEqual([]);
    expect(collectToArray(toIterableOrEmpty(null))).toEqual([]);
    expect(collectToArray(toIterableOrEmpty(23))).toEqual([]);
    expect(collectToArray(toIterableOrEmpty('hello'))).toEqual([]);
    expect(collectToArray(toIterableOrEmpty({}))).toEqual([]);
  });
});
