import { reduce } from './reduce';

describe('scan', () => {
  it('works on iterables', () => {
    const r = reduce((a, b) => a + b, 0);
    expect(r([1, 2, 3, 4])).toEqual(10);
    expect(
      r(
        (function*() {
          yield 1;
          yield -1;
          yield 3;
        })()
      )
    ).toEqual(3);
  });
});
