import { isInfinite, isNil } from '../is';

export interface LazyRange {
  /* tslint:disable */
  (): Iterable<number>;
  (end: number): Iterable<number>;
  (start: number, end: number): Iterable<number>;
  (start: number, end: number, step: number): Iterable<number>;
  /* tslint:enable */
}

export const lazyRange: LazyRange = (start = Infinity, end?: number, step: number = 1) => {
  if (isNil(end)) return lazyRange(0, start, step);
  const to = +(end || 0);
  const from = +start;
  const stepAmt = Math.abs(step || 1);
  if (isInfinite(to)) {
    if (isInfinite(from)) {
      return (function*() {
        yield 0;
        for (let n = stepAmt; ; n += stepAmt) {
          yield n;
          yield -n;
        }
      })();
    } else {
      if (to === Infinity) {
        return (function*() {
          for (let n = from; ; n += stepAmt) yield n;
        })();
      } else {
        return (function*() {
          for (let n = from; ; n -= stepAmt) yield n;
        })();
      }
    }
  } else {
    if (from < to) {
      return (function*() {
        for (let n = from; n < to; n += stepAmt) yield n;
      })();
    } else {
      return (function*() {
        for (let n = from; n > to; n -= stepAmt) yield n;
      })();
    }
  }
};
