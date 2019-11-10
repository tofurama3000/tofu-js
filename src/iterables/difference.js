/**
 * @module iterables:difference
 * @ignore
 */
import { curry } from '../fp/curry';
import { collectToSet } from './collectToSet';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns the items in the first iterable that are not in the other iterables
 * Can be thought of as performing the Set difference operator (A - B)
 *
 * Note: It uses the Set has function to find the difference
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable1 The iterable that will provide values
 * @param {Iterable<any>} iterable2 An iterable with values to remove from iterable1
 * @param {...Iterable<any>} iterables Other iterables with values to remove from iterable1
 * @returns {Iterable<any>} values from iterable1 not in the other iterables
 */
export const difference = curry(function*(iterable1, iterable2, ...iterables) {
  const sets = [iterable2, ...iterables].map(e => collectToSet(toIterableOrEmpty(e)));
  for (const val of collectToSet(toIterableOrEmpty(iterable1))) {
    let shouldYield = true;
    for (const set of sets) {
      if (set.has(val)) {
        shouldYield = false;
        break;
      }
    }
    if (shouldYield) {
      yield val;
    }
  }
});
