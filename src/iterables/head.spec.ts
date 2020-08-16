import { collectToArray } from './collectToArray';
import { head } from './head';

describe('head', () => {
  it('returns an array of the first element or nothing', () => {
    expect(collectToArray(head([0, 3]))).toEqual([0]);
    expect(collectToArray(head([]))).toEqual([]);
  });
});
