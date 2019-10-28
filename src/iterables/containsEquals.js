/**
 * @module iterables:containsEquals
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { isEqual } from '../is/index';

/**
 * Returns true if the value is in the iterable by checking using isEqual
 * @autocurried
 * @kind function
 * @param {any} value The value to search for
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {boolean} whether or not the value was found
 */
export const containsEquals = curry(function(value, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (isEqual(val, value)) return true;
  }
  return false;
});
