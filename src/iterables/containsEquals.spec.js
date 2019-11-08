import { containsEquals } from './containsEquals';
import { toList } from '../immutable/list';

describe('Iterable containsEquals', () => {
  it('detects whether or not an item is in an iterable using isEqual', () => {
    expect(containsEquals({a: 5}, [1, 2, {a: 5}, 4, 5])).toBe(true);
    expect(containsEquals(toList([1, 2, 3]), toList([1, toList([1, 2, 3]), 5, 4]))).toBe(true);
    expect(containsEquals(toList([1, 2, 3]), toList([1, [1, [2, [3, []]]], 5, 4]))).toBe(true);
    expect(containsEquals(15, [1, 2, 5, 4])).toBe(false);
  });
});
