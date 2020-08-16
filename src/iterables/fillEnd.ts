/**
 * @module iterables:fillEnd
 * @ignore
 */
import { curry } from '../fp/curry';
import { fill } from './fill';

/**
 * Replaces all values in an iterable with a specified value after a provided index
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} start The index to start replacing values
 * @param {value} value The value to fill the iterable with
 * @param {Iterable<any>} iterable The iterable to fill
 * @returns {Iterable<any>} The resulting iterable
 */
export const fillEnd = curry(function(
  start: number,
  value: any,
  iterable: Iterable<any>
): Iterable<any> {
  return fill(start, Infinity, value, iterable);
});
