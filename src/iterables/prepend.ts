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
 * @param {any} element The element to prepend
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const prepend = curry(function*(element: any, iterable: Iterable<any>): Iterable<any> {
  yield element;
  yield* toIterableOrEmpty(iterable);
});
