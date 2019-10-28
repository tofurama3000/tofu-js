/**
 * @module iterables:contains
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns true if the value is identical to an element in the iterable
 * @autocurried
 * @kind function
 * @param {any} value The value to search for
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {boolean} whether or not the value was found
 */
export const contains = curry(function(value, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (val === value) return true;
  }
  return false;
});
