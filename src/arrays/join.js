import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp/curry';

/**
 * @module arrays:join
 * @ignore
 */

 /**
  * Joins elements of an array with a string
  * @kind function
  * @autocurried
  * @param {string} separator String to join elements with
  * @param {any[]} array Array to operate on
  * @returns {string} The resulting string
  */
export const join = curry((separator, arr) => toArrayOrEmpty(arr).join(separator));
