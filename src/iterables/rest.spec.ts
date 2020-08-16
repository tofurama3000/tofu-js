import { rest } from './rest';
import { collectToArray } from './collectToArray';

describe('Iterable rest', () => {
  it('Skips the first element', () => {
    expect(collectToArray(rest([1, 2, 3, 4, 5]))).toEqual([2, 3, 4, 5]);
    expect(collectToArray(rest([1]))).toEqual([]);
    expect(collectToArray(rest([]))).toEqual([]);
  });
});
