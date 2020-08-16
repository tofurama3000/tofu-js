import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

import { Predicate } from '../commonTypes';

/**
 * @module arrays:filter
 * @ignore
 */

/**
 * Filters out the elements of an array where the predicate returns false
 * @autocurried
 * @kind function
 * @param {Predicate} func Function to filter by
 * @param {any[]} array Array to filter
 * @returns {any[]} The resulting array
 */
export const filter = curry(function(func: Predicate<any>, array: any): any[] {
  return toArrayOrEmpty(array).filter(func);
});
