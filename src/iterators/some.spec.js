import { some } from './some';

describe('Iterable some', () => {
  it('returns true if some element matches predicate', () => {
    expect(some(x => x % 2 === 0, [1, 3, 5, 7, 9, 10, 11, 12])).toBe(true);
    expect(some(x => x % 2 === 0, [1, 3, 5, 7, 9, 11])).toBe(false);
  });
});
