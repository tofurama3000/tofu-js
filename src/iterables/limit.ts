/**
 * @module iterables:limit
 * @ignore
 */
import { curry, CF2 } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns an iterable with no more than a provided maximum number of elements
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} max The maximum number of elements in the resulting iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const limit = curry(function*(max: number, iterable: Iterable<any>): Iterable<any> {
  const iter = toIterableOrEmpty(iterable);
  let count = 0;
  for (const val of iter) {
    if (count++ < (max | 0)) {
      yield val;
    } else {
      break;
    }
  }
});
