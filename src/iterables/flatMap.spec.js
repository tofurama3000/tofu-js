import { collectToArray } from './collectToArray';
import { flatMap } from './flatMap';
import { lazyRange } from '../utils/lazyRange';

describe('flatMap', () => {
  it('Can flatten iterables', () => {
    const fm = flatMap(x => lazyRange(x));
    expect(collectToArray(fm([1, 2, 3]))).toEqual([0, 0, 1, 0, 1, 2]);
  });

  it('Can handle non-iterables', () => {
    expect(collectToArray(flatMap(x => 5, [1]))).toEqual([5]);
  });
});
