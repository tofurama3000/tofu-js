/**
 * @module iterables:firstOr
 * @ignore
 */
import { curry } from '../fp/curry';

/**
 * Returns the first element of an iterable or a default value if the iterable is empty
 *
 * @kind function
 * @param {any} defaultValue the vaue to return if the iterable is empty
 * @param {Iterable<any>} iterable The iterable to grab the first element of
 * @returns {Iterable<any>} The first element of the iterable or defaultValue if it is empty
 */
export const firstOr = curry((defaultValue, iterable) => {
  for (const v of iterable) {
    return v;
  }
  return defaultValue;
});
