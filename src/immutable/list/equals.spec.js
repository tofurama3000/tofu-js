import { toList } from './impl';
import { equals } from './equals';

describe('Immutable List equals', () => {
  it('detects equal lists', () => {
    expect(equals([1, [2, [3, []]]], toList([1, 2, 3]))).toBe(true);
    expect(equals(toList([1, 2, 3]), toList([1, 2, 3]))).toBe(true);
    expect(equals(toList([0, 1, 2, 3]).dropFirst(), toList([1, 2, 3]))).toBe(true);
  });

  it('detects unequal lists', () => {
    expect(equals([1, [2, [3, []]]], toList([2, 2, 3]))).toBe(false);
    expect(equals(toList([1, 2, 3]), toList([1, 2, 4]))).toBe(false);
    expect(equals(toList([0, 1, 2, 3, 4]).dropFirst(), toList([1, 2, 3]))).toBe(false);
    expect(equals(toList([0, 1, 2, 3, 4]).dropFirst(), toList([1, 2, 3, 4, 5]))).toBe(false);
  });
});
