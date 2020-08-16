/**
 * @module iterables:fillStart
 * @ignore
 */
import { curry } from '../fp/curry';
import { fill } from './fill';

/**
 * Replaces all values in an iterable with a specified value before a provided index
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} end The exclusive ending index to stop filling values
 * @param {value} value The value to fill the iterable with
 * @param {Iterable<any>} iterable The iterable to fill
 * @returns {Iterable<any>} The resulting iterable
 */
export const fillStart = curry(function(
  end: number,
  value: any,
  iterable: Iterable<any>
): Iterable<any> {
  return fill(0, end, value, iterable);
});
