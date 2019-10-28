import { chunk } from './chunk';
import { collectToArray } from './collectToArray';

describe('chunk', () => {
  it('can chunk arrays', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(collectToArray(chunk(3, arr1))).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(collectToArray(chunk(2, arr1))).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('can chunk generators', () => {
    const gen = function*() {
      return yield* [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    expect(collectToArray(chunk(3, gen()))).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(collectToArray(chunk(2, gen()))).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('is empty for non-iterables', () => {
    expect(collectToArray(chunk(2, 5))).toEqual([]);
  });
});
