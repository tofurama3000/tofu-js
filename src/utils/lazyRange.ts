import { isInfinite } from '../is/isInfinite';
import { isNil } from '../is/isNil';

/**
 * @module utils:lazyRange
 * @ignore
 */

/**
 * Generates a range of numbers lazily (can be infinite range)
 *
 * Note: if start is provided but end is not then it will act as if starting at 0 and ending at the provided number
 * E.g. lazyRange(4) is the same as lazyRange(0, 4)
 *
 * Note: if start > end then it will step down from start to end
 *
 * @param {number} start (Optional, defaults to 0) the starting number for the range
 * @param {number} end (Optional, defaults to Infinity) the ending number for the range
 * @param {number} step (optional, defaults to 1) the step size to take for the range
 * @returns {Iterable<number>} iterable for the range to be generated
 */
export function lazyRange(start = Infinity, end = null, step = 1): Iterable<number> {
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
}
