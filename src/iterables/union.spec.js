import { collectToArray } from './collectToArray';
import { union } from './union';
import { toList } from '../immutable/list';

describe('Iterable union', () => {
  it('returns the union of the iterables', () => {
    expect(collectToArray(union([1, 2, 3], [3, 4, 5], [5, 6, 7]))).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(collectToArray(union([1, 2, 3], toList([3, 4, 5]), [5, 6, 7]))).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });
});
