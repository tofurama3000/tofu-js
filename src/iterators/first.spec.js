import { collectToArray } from './collectToArray';
import { first } from './first';

describe('first', () => {
  it('returns just the first element or nothing', () => {
    expect(collectToArray(first([0, 3]))).toEqual([0]);
    expect(collectToArray(first([]))).toEqual([]);
  });
});
