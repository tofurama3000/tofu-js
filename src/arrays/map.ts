import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:map
 * @ignore
 */

/**
 * Call a function for each element of the array and return the results in a new array
 * @kind function
 * @autocurried
 * @param {function} func The function to call on each element
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting array
 */
export const map = curry(function<T, G>(func: (T) => G, array: T[]): G[] {
  return toArrayOrEmpty(array).map(func);
});
