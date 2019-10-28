import { tap } from './tap';
import { collectToArray } from './collectToArray';

describe('tap', () => {
  it('works on iterables', () => {
    let arr = [];
    const t = tap(v => arr.push(v));
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
