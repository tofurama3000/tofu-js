/**
 * @module iterables:reverse
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToArray } from './collectToArray';

/**
 * Reverses the elements of an iterable
 *
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export function* reverse<T>(iterable: Iterable<T>): Iterable<T> {
  const iter = toIterableOrEmpty<T>(iterable);
  const arr = collectToArray<T>(iter);

  for (let i = arr.length - 1; i >= 0; --i) {
    yield arr[i];
  }
}
