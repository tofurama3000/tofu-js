/**
 * @module iterables:tap
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Calls a function for each element of an iterable and then passes the elmenet on
 * 
 * Often used for creating side effects (such as logging) while in the middle of processing an iterable
 * 
 * @autocurried
 * @generator
 * @kind function
 * @param {function} func Function to call on each element
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} An iterable with the values passed through
 */
export const tap = curry(function*(func, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    func(val);
    yield val;
  }
});
