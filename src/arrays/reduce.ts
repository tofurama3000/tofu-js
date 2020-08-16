import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:reduce
 * @ignore
 */

/**
 * Accumulates the elements in the array using a function
 * @kind function
 * @autocurried
 * @param {function} func Function to accumulate the values with
 * @param {any} start The starting accumulation value
 * @param {any[]} array Array to operate on
 * @returns {any} The resulting accumulation
 */
export const reduce = curry(function<T, G>(func: (G, T) => G, start: G, array: T[]): G {
  return toArrayOrEmpty<T>(array).reduce(func, start);
});
