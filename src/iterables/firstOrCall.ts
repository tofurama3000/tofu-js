/**
 * @module iterables:firstOrCall
 * @ignore
 */
import { curry } from '../fp/curry';

/**
 * Returns the first element of an iterable or the result of calling a function the iterable is empty
 *
 * @kind function
 * @param {Function} func The function to call if empty
 * @param {Iterable<any>} iterable The iterable to grab the first element of
 * @returns {Iterable<any>} The result
 */
export const firstOrCall = curry((func: () => any, iterable: Iterable<any>): any => {
  for (const v of iterable) {
    return v;
  }
  return func();
});
