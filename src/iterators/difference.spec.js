import { collectToArray } from './collectToArray';
import { difference } from './difference';
import { toList } from '../immutable/list';

describe('Iterable difference', () => {
  it('returns the difference of the iterables', () => {
    expect(collectToArray(difference([1, 2, 3], [3, 4, 5], [5, 6, 7]))).toEqual([1, 2, 4, 6, 7]);
    expect(collectToArray(difference([1, 2, 3], toList([3, 4, 5]), [5, 6, 7]))).toEqual([
      1,
      2,
      4,
      6,
      7
    ]);
  });
});
