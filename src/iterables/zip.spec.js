import { collectToArray } from './collectToArray';
import { zip } from './zip';

describe('zip', () => {
  it('works with two iterables', () => {
    expect(
      collectToArray(
        zip(
          [1, 2, 3, 4],
          (function*() {
            yield 1;
            yield -1;
            yield 3;
          })()
        )
      )
    ).toEqual([[1, 1], [2, -1], [3, 3], [4, null]]);
  });

  it('works with many iterables', () => {
    expect(
      collectToArray(
        zip(
          [1, 2, 3, 4],
          (function*() {
            yield 1;
            yield -1;
            yield 3;
          })(),
          [0, 10, null, 3]
        )
      )
    ).toEqual([[1, 1, 0], [2, -1, 10], [3, 3, null], [4, null, 3]]);
  });
});
