import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';
/**
 * @module arrays:skip
 * @ignore
 */

 /**
  * Skips the first n items of the array
  * @kind function
  * @autocurried
  * @param {number} n Number of elements to skip
  * @param {any[]} array Array to operate on
  * @returns {any[]} The resulting array
  */
export const skip = curry((n, array) => toArrayOrEmpty(array).splice(n));
