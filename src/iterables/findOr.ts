/**
 * @module iterables:findOr
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { filter } from './filter';
import { firstOr } from './firstOr';
import { Predicate } from '../commonTypes';

/**
 * Returns the first element in an iterable that a predicate returns true for or a default value if none is found
 *
 * @autocurried
 * @kind function
 * @param {any} defaultValue The value to return if no element is found
 * @param {Predicate} predicate The predicate to test values with
 * @param {Iterable<any>} iterable The iterable to filter
 * @returns {any} The first element a predicate returned true for or defaultValue if none is found
 */
export const findOr = curry(function(
  defaultValue: any,
  predicate: Predicate<any>,
  iterable: Iterable<any>
): any {
  return firstOr(defaultValue, filter(predicate, toIterableOrEmpty(iterable)));
});
