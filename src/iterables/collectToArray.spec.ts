import { collectToArray } from './collectToArray';

describe('collectToArray', () => {
  it('Collects iterators to an array with no limit', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(collectToArray(arr)).toEqual(arr);
    expect(
      collectToArray(
        (function*() {
          yield 1;
          yield 2;
          yield 3;
        })()
      )
    ).toEqual([1, 2, 3]);
  });

  it('Collects iterators to an array with a limit', () => {
    expect(collectToArray([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(
      collectToArray(
        (function*() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        2
      )
    ).toEqual([1, 2]);
  });
});
