/**
 * @module iterables:reduce
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Accumulates the values of an iterable by calling a function and passing in the last accumulate and current value
 *
 * @autocurried
 * @kind function
 * @param {function} func The reducer function
 * @param {any} start The initial accumulation value
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {any} The resulting accumulation
 */
export const reduce = curry(function(
  func: (a: any, c: any) => any,
  start: any,
  iterable: Iterable<any>
): any {
  const iter = toIterableOrEmpty(iterable);
  let accumulated = start;
  for (const val of iter) {
    accumulated = func(accumulated, val);
  }
  return accumulated;
});
