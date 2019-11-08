/**
 * @module iterables:groupBy
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Takes an iterable of values and groups them by the result of calling a function
 * 
 * @generator
 * @kind function
 * @param {function} func A function to call to group elements by
 * @param {Iterable<any>} iterable An iterable to iterate over
 * @returns {Object} An object where the result of func is the key and an array of elements that provided that key is the value
 */
export const groupBy = curry(function(func, iterable) {
  const result = {};
  for (const val of toIterableOrEmpty(iterable)) {
    const key = func(val);
    result[key] = result[key] || [];
    result[key].push(val);
  }
  return result;
});
