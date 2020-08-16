import { filter } from './filter';

describe('filter', () => {
  it('works on arrays', () => {
    const func = x => x % 2 === 1;
    expect(filter(func, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9]);
  });
});
