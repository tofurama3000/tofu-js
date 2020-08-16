import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:tap
 * @ignore
 */

/**
 * Calls a function for each element in the array and returns the array
 * @kind function
 * @autocurried
 * @param {function} func Function to call on the array
 * @param {any[]} array Array to operate on
 * @returns {any[]} The original array
 */
export const tap = curry(function(func: (any) => void, array: any[]): any[] {
  toArrayOrEmpty(array).forEach(func);
  return array;
});
