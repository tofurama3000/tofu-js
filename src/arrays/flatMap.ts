import { curry } from '../fp/curry';
import { pipe } from '../fp/pipe';
import { toArrayOrEmpty } from './toArrayOrEmpty';
import { map } from './map';
import { flatten } from './flatten';

/**
 * @module arrays:flatMap
 * @ignore
 */

/**
 * Calls map and then flatten on the array
 * @kind function
 * @autocurried
 * @param {function} func Function to call map with
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting array
 */
export const flatMap = curry(function<T, G>(func: (T) => G, array: T): G[] {
  return pipe(toArrayOrEmpty(array), map(func), flatten);
});
