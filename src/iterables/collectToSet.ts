/**
 * @module iterables:collectToList
 * @ignore
 */
import { isInfinite } from '../is/isInfinite';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Converts an iterable into a native Set
 *
 * The maximum number of elements to iterate over can optionally be provided as well
 *
 * @kind function
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @param {number} max (Optional, default Infinity) the maximum size of the resulting array
 * @returns {Set<any>} returns the iterable as a Set
 */
export const collectToSet = <T>(iterable: Iterable<T>, max = Infinity): Set<T> =>
  isInfinite(max)
    ? new Set<T>(toIterableOrEmpty<T>(iterable))
    : new Set<T>(limit(max, toIterableOrEmpty<T>(iterable)));
