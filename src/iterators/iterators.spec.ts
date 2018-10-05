import { collectToArray, limit, map, scan } from './index';

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

describe('map', () => {
  it('works on iterables', () => {
    const m = map(x => x + 1);
    expect(collectToArray(m([1, 2, 3, 4]))).toEqual([2, 3, 4, 5]);
    expect(
      collectToArray(
        m(
          (function*() {
            yield 1;
            yield 2;
            yield 3;
          })()
        )
      )
    ).toEqual([2, 3, 4]);
  });
});

describe('scan', () => {
  it('works on iterables', () => {
    const s = scan((a, b) => a + b, 0);
    expect(collectToArray(s([1, 2, 3, 4]))).toEqual([1, 3, 6, 10]);
    expect(
      collectToArray(
        s(
          (function*() {
            yield 1;
            yield -1;
            yield 3;
          })()
        )
      )
    ).toEqual([1, 0, 3]);
  });
});

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
