import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:flatten
 * @ignore
 */

/**
 * Flattens one layer of nested arrays in an array
 * @kind function
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting array
 */
export const flatten = curry(function(array: any[][] | any[]): any[] {
  return [].concat(...toArrayOrEmpty(array));
});
