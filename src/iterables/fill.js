/**
 * @module iterables:fill
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Fills an iterable between the start and end indexes with a value
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} start The starting index to begin filling values
 * @param {number} end The exclusive ending index to stop filling values
 * @param {value} value The value to fill the iterable with
 * @param {Iterable<any>} iterable The iterable to fill
 * @returns {Iterable<any>} An iterable with some values filled
 */
export const fill = curry(function*(start, end, value, iterable) {
  let index = 0;
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (index >= start && index < end) {
      index++;
      yield value;
      continue;
    }
    index++;
    yield val;
  }
});
