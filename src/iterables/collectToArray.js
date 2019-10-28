/**
 * @module iterables:collectToArray
 * @ignore
 */
import { isInfinite } from '../is/isInfinite';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Converts an iterable into an array
 * 
 * The maximum number of elements to iterate over can optionally be provided as well
 *
 * @kind function
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @param {number} max (Optional, default Infinity) the maximum size of the resulting array
 * @returns {any[]} returns the iterable as an array
 */
export const collectToArray = (iterable, max = Infinity) =>
  isInfinite(max)
    ? [...toIterableOrEmpty(iterable)]
    : collectToArray(limit(max, toIterableOrEmpty(iterable)));
