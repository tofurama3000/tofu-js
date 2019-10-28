import { contains } from './contains';
import { toList } from '../immutable/list';

describe('Iterable contains', () => {
  it('detects whether or not an item is in an iterable', () => {
    expect(contains(5, [1, 2, 3, 4, 5])).toBe(true);
    expect(contains(4, toList([1, 2, 5, 4]))).toBe(true);
    expect(contains(15, toList([1, 2, 5, 4]))).toBe(false);
    expect(contains(15, [1, 2, 5, 4])).toBe(false);
  });
});
