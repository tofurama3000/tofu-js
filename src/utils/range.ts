import { isNil } from '../is/isNil';

/**
 * @module utils:range
 * @ignore
 */

/**
 * Generates a range of numbers and returns them as an array
 *
 * Note: if start is provided but end is not then it will act as if starting at 0 and ending at the provided number
 * E.g. range(4) is the same as range(0, 4)
 *
 * Note: if start > end then it will step down from start to end
 *
 * @param {number} start (Optional, defaults to 0) the starting number for the range
 * @param {number} end the ending number for the range
 * @param {number} step (optional, defaults to 1) the step size to take for the range
 * @returns {number[]} number array for the range
 */
export function range(start = 0, end = undefined, step = 1): number[] {
  if (isNil(end)) return range(0, start, step);
  const arr = [];
  const to = +(end || 0);
  const from = +start;
  const stepAmt = Math.abs(step || 1);
  if (from < to) {
    for (let i = from; i < to; i += stepAmt) arr.push(i);
  } else {
    for (let i = from; i > to; i -= stepAmt) arr.push(i);
  }
  return arr;
}
