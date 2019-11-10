/**
 * @module iterables:join
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp/curry';
import { collectToArray } from './collectToArray';

/**
 * Returns the elements of an iterable as a string joined by the separator
 *
 * @autocurried
 * @kind function
 * @param {string} separator The string to join elements with
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {string} The resulting string
 */
export const join = curry(function(separator, iterable) {
  return collectToArray(toIterableOrEmpty(iterable)).join(separator);
});
