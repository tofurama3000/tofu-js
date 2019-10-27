import { isInfinite } from '../is/isInfinite';
import { isNil } from '../is/isNil';

export const lazyRange = (start = Infinity, end, step = 1) => {
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
