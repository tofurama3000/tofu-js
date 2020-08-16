/**
 * @module iterables:map
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Calls a function on each element of an iterable and returns an iterable of those results
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {function} func The funciton to call on each element of an iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const map = curry(function*(func: (any) => any, iterable: Iterable<any>): Iterable<any> {
  for (const val of toIterableOrEmpty(iterable)) yield func(val);
});
