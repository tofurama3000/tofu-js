import { reverse } from './reverse';
import { collectToArray } from './collectToArray';

describe('Iterable reverse', () => {
  it('can reverse iterables', () => {
    expect(collectToArray(reverse([1, 2, 3, 4]))).toEqual([4, 3, 2, 1]);
  });
});
