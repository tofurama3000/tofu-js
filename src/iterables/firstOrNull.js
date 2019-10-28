/**
 * @module iterables:firstOrNull
 */
import { firstOr } from './firstOr';

/**
 * Returns the first element of an iterable or a null if the iterable is empty
 * 
 * @kind function
 * @param {Iterable<any>} iterable The iterable to grab the first element of
 * @returns {Iterable<any>} The first element of the iterable or null if it is empty
 */
export const firstOrNull = firstOr(null);
