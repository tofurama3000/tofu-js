/**
 * @module iterables:forEach
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Calls a function on each element of an iterable
 *
 * @kind function
 * @param {function} func The function to call for each element
 * @param {Iterable<any>} iterable The iterable to flatten
 * @returns {void} Does not return
 */
export const forEach = curry(function(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    func(val);
  }
});
