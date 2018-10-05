import { isInfinite, isNil } from '../is';

export const range = (start: number = 0, end?: number, step: number = 1) => {
  if (isNil(end)) return range(0, start, step);
  const arr: number[] = [];
  const to = +(end || 0);
  const from = +start;
  const stepAmt = Math.abs(step || 1);
  if (from < to) {
    for (let i = from; i < to; i += stepAmt) arr.push(i);
  } else {
    for (let i = from; i > to; i -= stepAmt) arr.push(i);
  }
  return arr;
};

export const lazyRange = (start: number, end?: number, step: number = 1) => {
  if (isNil(end)) return range(0, start, step);
  const to = +(end || 0),
    from = +start,
    stepAmt = Math.abs(step || 1);
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
