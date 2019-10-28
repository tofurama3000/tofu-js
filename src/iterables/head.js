import { take } from './take';

/**
 * Returns an iterable of the first element in an iterable or an empty iterable if the provided iterable is empty
 * 
 * @alias iterables:first
 * @kind function
 * @param {Iterable<any>} iterable The iterable to grab the first element of
 * @returns {Iterable<any>} The first element of an iterable if it is not empty or an empty iterable otherwwise
 */
export const head = take(1);
