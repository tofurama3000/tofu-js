/**
 * @module iterables:take
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp/curry';

/**
 * Keeps only the first n values of an iterable
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} n The number of elements to keep
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const take = curry(function*(limit: number, iterable: Iterable<any>): Iterable<any> {
  let i = 0;
  const iter = toIterableOrEmpty(iterable);
  for (const v of iter) {
    if (i++ < limit) {
      yield v;
    } else {
      return;
    }
  }
});
