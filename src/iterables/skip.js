/**
 * @module iterables:skip
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Skips the first n values of an iterable
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {number} n The number of elements to skip
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @returns {Iterable<any>} The resulting iterable
 */
export const skip = curry(function*(n, iterable) {
  const iter = toIterableOrEmpty(iterable)[Symbol.iterator]();
  let isDone = false;
  for (let i = 0; i < n && !isDone; ++i) {
    isDone = iter.next().done;
  }
  if (isDone) return;
  while (true) {
    const { done, value } = iter.next();
    if (done) return;
    yield value;
  }
});
