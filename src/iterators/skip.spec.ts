import { collectToArray } from './collectToArray';
import { skip } from './skip';

describe('skip', () => {
  it('does skip', () => {
    expect(collectToArray(skip(4, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([5, 6, 7, 8]);
    expect(collectToArray(skip(2, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([3, 4, 5, 6, 7, 8]);
    expect(collectToArray(skip(0, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(collectToArray(skip(-10, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
