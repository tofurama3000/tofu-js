/**
 * @module iterables:find
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { first } from './first';
import { filter } from './filter';

/**
 * Returns an iterable holding first element in an iterable for which a predicate returns true or an empty iterable if none is found
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Predicate} predicate The predicate to test values with
 * @param {Iterable<any>} iterable The iterable to filter
 * @returns {Iterable<any>} An iterable of one element if a match is found or an empty iterable otherwise
 */
export const find = curry(function*(predicate, iterable) {
  for (const v of first(filter(predicate, toIterableOrEmpty(iterable)))) yield v;
});
