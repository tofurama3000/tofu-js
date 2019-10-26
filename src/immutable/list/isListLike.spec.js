import { isListLike } from './isListLike';
import { toList } from './impl';

describe('Immutable List isListLike', () => {
  it('can detect lists', () => {
    expect(isListLike(toList(5))).toBe(true);
    expect(isListLike(toList([1, 2, 3, 4]))).toBe(true);
    expect(isListLike(toList([1, 2, 3, 4]).drop(3))).toBe(true);
    expect(isListLike(toList([1, 2, 3, 4]).drop(4))).toBe(true);
  });

  it('can detect list-likes', () => {
    expect(isListLike([1, [2, [3, []]]])).toBe(true);
    expect(isListLike([])).toBe(true);
    expect(isListLike([1, []])).toBe(true);
  });

  it('can detect non-list likes', () => {
    expect(isListLike([1, [2, [3]]])).toBe(false);
    expect(isListLike([1, [2, [3, [], []]]])).toBe(false);
    expect(isListLike([1, [2, [3, 4, []]]])).toBe(false);
    expect(isListLike([1, [2, [3, undefined]]])).toBe(false);
    expect(isListLike([1, [2, [3, null]]])).toBe(false);
    expect(isListLike([1, [2, [3, 0]]])).toBe(false);
    expect(isListLike([1, [2, [3, {}]]])).toBe(false);
    expect(isListLike([1, [2, [3, []], 4]])).toBe(false);
    expect(isListLike('')).toBe(false);
    expect(isListLike({})).toBe(false);
    expect(isListLike(() => {})).toBe(false);
    expect(isListLike(23)).toBe(false);
    expect(isListLike(null)).toBe(false);
    expect(isListLike(undefined)).toBe(false);
    expect(isListLike(true)).toBe(false);
    expect(isListLike(false)).toBe(false);
  });
});
