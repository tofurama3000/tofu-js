/**
 * @module iterables:concat
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Concatenates the provided iterables
 * @autocurried
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable1 The first iterable
 * @param {Iterable<any>} iterable2 The second iterable*
 * @param {...Iterable<any>} iterables Other iterables
 * @returns {Iterable<any>} the resulting concatenation of the provided iterables
 */
export const concat = curry(function*(iterable1, iterable2, ...iterables) {
  for (const iterable of [iterable1, iterable2, ...iterables]) {
    yield* iterable;
  }
});
