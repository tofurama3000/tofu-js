import { collectToArray } from './collectToArray';
import { filter } from './filter';

describe('filter', () => {
  it('works on iterables', () => {
    const func = (x: number) => x % 2 === 1;
    expect(collectToArray(filter(func, [1, 2, 3, 4, 5, 6, 7, 8, 9]))).toEqual([1, 3, 5, 7, 9]);
  });
});
