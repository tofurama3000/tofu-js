import { map } from './map';
import { collectToArray } from './collectToArray';

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
