import { findOr } from './findOr';

describe('Iterable findOr', () => {
  it('returns the first element that matches a predicate', () => {
    expect(findOr(12, x => x % 2 === 0, [1, 3, 5, 6, 8, 9, 10])).toEqual(6);
    expect(findOr(12, x => x % 2 === 1, [1, 3, 5, 6, 8, 9, 10])).toEqual(1);
    expect(findOr(12, x => x % 3 === 2, [1, 3, 5, 6, 8, 9, 10])).toEqual(5);
    expect(findOr(12, x => x > 12, [1, 3, 5, 6, 8, 9, 10])).toEqual(12);
    expect(findOr(13, x => x > 12, [1, 3, 5, 6, 8, 9, 10])).toEqual(13);
  });
});
