/**
 * @module iterables:last
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns the last element of an iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 */
export function last<T>(iterable: Iterable<T>): T {
  let lastValue = undefined;
  for (const val of toIterableOrEmpty(iterable)) {
    lastValue = val;
  }
  return lastValue;
}
