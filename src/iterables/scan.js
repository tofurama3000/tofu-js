/**
 * @module iterables:scan
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Accumulates the values of an iterable by calling a function and returns all intermediate results
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {function} func The reducer function
 * @param {any} start The initial accumulation value
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} An iterable of all intermediate accumulations
 */
export const scan = curry(function*(func, start, iterable) {
  const iter = toIterableOrEmpty(iterable);
  let accumulated = start;
  for (const val of iter) {
    accumulated = func(accumulated, val);
    yield accumulated;
  }
});
