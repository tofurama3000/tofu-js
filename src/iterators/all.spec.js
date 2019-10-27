import { all } from './all';

describe('Iterable all', () => {
  it('returns true if all elements matches predicate', () => {
    expect(all(x => x < 15, [1, 3, 5, 7, 9, 10, 11, 12])).toBe(true);
    expect(all(x => x % 2 === 0, [2, 4, 6, 8, 10, 11])).toBe(false);
  });
});
