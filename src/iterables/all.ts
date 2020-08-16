/**
 * @module iterables:all
 * @ignore
 */

import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { Predicate } from '../commonTypes';

/**
 * Applies a predicate to all elements of an iterable and ensures they all return true
 * Will return false as soon as the predicate returns false for any element
 * @autocurried
 * @kind function
 * @param {Predicate} predicate The predicate to execute for each element
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {boolean} returns true if the predicate returns true for all elements of the iterable
 */
export const all = curry(function(predicate: Predicate<any>, iterable: Iterable<any>): boolean {
  for (const val of toIterableOrEmpty(iterable)) {
    if (!predicate(val)) return false;
  }
  return true;
});
