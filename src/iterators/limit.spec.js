import { collectToArray, limit } from './index';

describe('limit', () => {
  it('works on iterables', () => {
    expect(collectToArray(limit(2, [1, 2, 3, 4]))).toEqual([1, 2]);
    expect(
      collectToArray(
        limit(
          2,
          (function*() {
            yield 1;
            yield -1;
            yield 3;
          })()
        )
      )
    ).toEqual([1, -1]);
  });
});
