/**
 * @module iterables:flatMap
 * @ignore
 */
import { curry } from '../fp/curry';
import { isIterable } from '../is/isIterable';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Performs map(func, iterable) followed by flatten(iterable) on an iterable
 * 
 * @generator
 * @autocurried
 * @kind function
 * @param {function} func A function to apply to each element of the iterable
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const flatMap = curry(function*(func, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    const newIterable = func(val);
    if (isIterable(newIterable)) {
      for (const newVal of newIterable) yield newVal;
    } else {
      yield newIterable;
    }
  }
});
