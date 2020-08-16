import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:limit
 * @ignore
 */

/**
 * Limits the number of elements in an array
 * @kind function
 * @autocurried
 * @param {number} max Maximum number of elements in the array
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting array
 */
export const limit = curry(function(max: number, array: any[]): any[] {
  return toArrayOrEmpty(array).splice(0, max);
});
