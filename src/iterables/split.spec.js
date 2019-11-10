import { split } from './split';
import { collectToArray } from './collectToArray';

describe('Iterable split', () => {
  it('Can split on an index', () => {
    const result = split(
      2,
      (function*() {
        yield* [1, 2, 3, 4];
      })()
    );
    expect(collectToArray(result[0])).toEqual([1, 2]);
    expect(collectToArray(result[1])).toEqual([3, 4]);
  });

  it('handles too large of an index', () => {
    const result = split(
      20,
      (function*() {
        yield* [1, 2, 3, 4];
      })()
    );
    expect(collectToArray(result[0])).toEqual([1, 2, 3, 4]);
    expect(collectToArray(result[1])).toEqual([]);
  });

  it('handles negative indices', () => {
    const result = split(
      -3,
      (function*() {
        yield* [1, 2, 3, 4];
      })()
    );
    expect(collectToArray(result[0])).toEqual([]);
    expect(collectToArray(result[1])).toEqual([1, 2, 3, 4]);
  });
});
