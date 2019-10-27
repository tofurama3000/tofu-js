import { findOrNull } from './findOrNull';

describe('Iterable findOrNull', () => {
  it('returns the first element that matches a predicate', () => {
    expect(findOrNull(x => x % 2 === 0, [1, 3, 5, 6, 8, 9, 10])).toEqual(6);
    expect(findOrNull(x => x % 2 === 1, [1, 3, 5, 6, 8, 9, 10])).toEqual(1);
    expect(findOrNull(x => x % 3 === 2, [1, 3, 5, 6, 8, 9, 10])).toEqual(5);
    expect(findOrNull(x => x > 12, [1, 3, 5, 6, 8, 9, 10])).toEqual(null);
  });
});
