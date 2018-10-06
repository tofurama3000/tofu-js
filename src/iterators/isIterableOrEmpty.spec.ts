import { isIterableOrEmpty } from './isIterableOrEmpty';
import { collectToArray } from './collectToArray';

describe('isIterableOrEmpty', () => {
  it('passes iterables through', () => {
    const iter = [1, 2, 3];
    expect(isIterableOrEmpty(iter)).toBe(iter); // reference should be the same
  });

  it('returns an empty iterable if given a non iterable', () => {
    expect(collectToArray(isIterableOrEmpty(undefined))).toEqual([]);
    expect(collectToArray(isIterableOrEmpty(null))).toEqual([]);
    expect(collectToArray(isIterableOrEmpty(23))).toEqual([]);
    expect(collectToArray(isIterableOrEmpty('hello'))).toEqual([]);
    expect(collectToArray(isIterableOrEmpty({}))).toEqual([]);
  });
});
