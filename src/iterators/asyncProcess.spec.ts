import { tap } from './tap';
import { asyncProcess } from './asyncProcess';

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
