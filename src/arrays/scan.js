import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:scan
 * @ignore
 */

/**
 * Accumulates the elements in the array using a function and returns an array with each intermediate accumulation
 * @kind function
 * @autocurried
 * @param {function} func Function to accumulate the values with
 * @param {any} start The starting accumulation value
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting intermediate accumulation values
 */
export const scan = curry((func, start, array) => {
  let accumulated = start;
  return toArrayOrEmpty(array).map(elem => {
    accumulated = func(accumulated, elem);
    return accumulated;
  });
});
