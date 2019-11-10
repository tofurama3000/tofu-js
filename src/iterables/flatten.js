/**
 * @module iterables:flatten
 * @ignore
 */
import { curry } from '../fp/curry';
import { isIterable } from '../is/isIterable';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Takes an iterable of iterables and concatenates the inner iterables into one iterable
 *
 * E.g.
 * [[1, 2, 3], [4, 5, 6]] => [1, 2, 3, 4, 5, 6]
 *
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable The iterable to flatten
 * @returns {Iterable<any>} The resulting iterable
 */
export const flatten = curry(function*(iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (isIterable(val)) {
      for (const innerVal of val) yield innerVal;
    } else {
      yield val;
    }
  }
});
