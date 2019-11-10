import { collectToArray } from './collectToArray';
import { append } from './append';

describe('Iterable prepend', () => {
  it('Can prepend an element', () => {
    expect(collectToArray(append(3, [1, 2, 3]))).toEqual([1, 2, 3, 3]);
    expect(collectToArray(append(null, []))).toEqual([null]);
    expect(collectToArray(append(1, null))).toEqual([1]);
  });
});
