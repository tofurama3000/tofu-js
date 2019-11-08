/**
 * @module iterables:fillAll
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Fills all values of an iterable with a provided value
 * 
 * @autocurried
 * @generator
 * @kind function
 * @param {value} value The value to fill the iterable with
 * @param {Iterable<any>} iterable The iterable to fill
 * @returns {Iterable<any>} An iterable with it's values filled
 */
export const fillAll = curry(function*(value, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const _ of iter) {
    yield value;
  }
});
