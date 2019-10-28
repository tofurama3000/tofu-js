import { scan } from './scan';
import { collectToArray } from './collectToArray';

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
