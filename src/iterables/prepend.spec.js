import { prepend } from './prepend';
import { collectToArray } from './collectToArray';

describe('Iterable prepend', () => {
  it('Can prepend an element', () => {
    expect(collectToArray(prepend(3, [1, 2, 3]))).toEqual([3, 1, 2, 3]);
    expect(collectToArray(prepend(null, []))).toEqual([null]);
    expect(collectToArray(prepend(1, null))).toEqual([1]);
  });
});
