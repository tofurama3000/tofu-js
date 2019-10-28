/**
 * @module iterables:some
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns true if any element of an iterable returns true
 * 
 * @autocurried
 * @kind function
 * @param {Predicate} predicate The predicate to execute for each element
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {boolean} returns true if the predicate returns true for any element of the iterable
 */
export const some = curry(function(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (func(val)) return true;
  }
  return false;
});
