import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp/curry';

/**
 * @module arrays:firstOr
 * @ignore
 */

 /**
  * Returns the first element of an array or a default value if the array is empty
  * @kind function
  * @param {any} defaultValue The value to return if the array is empty
  * @param {any[]} array Array to operate on
  * @returns {any} The first array element or default value
  */
export const firstOr = curry((defaultValue, array) => {
  const arr = toArrayOrEmpty(array);
  return arr.length ? arr[0] : defaultValue;
});
