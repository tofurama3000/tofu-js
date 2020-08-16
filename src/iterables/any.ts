/**
 * @module iterables:any
 * @ignore
 */

import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { Predicate } from '../commonTypes';

/**
 * Applies a predicate to elements of an iterable and returns true if any element returns true
 * Will return true as soon as the predicate returns true for any element
 * @autocurried
 * @kind function
 * @param {Predicate} predicate The predicate to execute for each element
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {boolean} returns true if the predicate returns true for any elements of the iterable
 */
export const any = curry(function(predicate: Predicate<any>, iterable: Iterable<any>): boolean {
  for (const val of toIterableOrEmpty(iterable)) {
    if (predicate(val)) return true;
  }
  return false;
});
