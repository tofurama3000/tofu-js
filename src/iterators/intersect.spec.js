import { intersect } from './intersect';
import { collectToArray } from './collectToArray';

describe('Iterable intersect', () => {
  it('takes the intersection', () => {
    expect(collectToArray(intersect([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [4, 5, 6, 7, 8]))).toEqual([
      4,
      5
    ]);
    expect(collectToArray(intersect([1, 1, 3, 4], [1, 4, 4, 4]))).toEqual([1, 4]);
  });
});
