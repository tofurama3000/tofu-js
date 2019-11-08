/**
 * @module iterables:filter
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Filters values from an iterable where a predicate returns false
 * 
 * @autocurried
 * @generator
 * @kind function
 * @param {Predicate} predicate The predicate to test values with
 * @param {Iterable<any>} iterable The iterable to filter
 * @returns {Iterable<any>} The resulting iterable
 */
export const filter = curry(function*(predicate, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (predicate(val)) yield val;
  }
});
