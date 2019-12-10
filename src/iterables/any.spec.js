import { any } from './any';

describe('Iterable any', () => {
  it('returns true if any elements matches predicate', () => {
    expect(any(x => x < 15, [1, 3, 5, 7, 9, 10, 11, 12])).toBe(true);
    expect(any(x => x % 2 === 0, [2, 4, 6, 8, 10, 11])).toBe(true);
    expect(any(x => x < 15, [15, 32, 51, 27, 9, 10, 11, 12])).toBe(true);
    
    expect(any(x => x < 15, [15, 32, 51, 27, 90, 510, 111, 122])).toBe(false);
    expect(any(x => x % 2 === 0, [21, 45, 67, 89, 13, 11])).toBe(false);
  });
});
