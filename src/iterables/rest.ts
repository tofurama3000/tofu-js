/**
 * @module iterables:empty
 * @ignore
 */
import { skip } from './skip';

/**
 * Returns an iterable that skips over the first element
 *
 * @kind function
 * @param {Iterable<any>} iterable The iterable to operate on
 * @returns {Iterable<any>} The resulting iterable
 */
export function* rest<T>(iterable: Iterable<T>): Iterable<T> {
  yield* skip(1, iterable);
}
