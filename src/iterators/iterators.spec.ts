import { asyncProcess, collectToArray, limit, map, scan, tap, zip } from './index';

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

describe('tap', () => {
  it('works on iterables', () => {
    let arr: any = [];
    const t = tap((v: any) => arr.push(v));
    collectToArray(t([1, 2, 3, 4]));
    expect(arr).toEqual([1, 2, 3, 4]);
    arr = [];
    collectToArray(
      t(
        (function*() {
          yield 1;
          yield -1;
          yield 3;
        })()
      )
    );
    expect(arr).toEqual([1, -1, 3]);
  });
});

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

describe('asyncProcess', () => {
  it('works on iterables', done => {
    const t = tap((v: any) => {
      expect(v).toBe(1);
      done();
    });
    t([2]);
    asyncProcess(
      t(
        (function*() {
          yield 1;
        })()
      )
    );
  });
});
