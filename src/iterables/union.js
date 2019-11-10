/**
 * @module iterables:union
 * @ignore
 */
import { curry } from '../fp/curry';
import { collectToSet } from './collectToSet';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns all the items in any iterable at most once
 *
 * Note: It uses the Set.has function to make occurences unique
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable1 The first iterable to get values from
 * @param {Iterable<any>} iterable2 The second iterable to get values from
 * @param {...Iterable<any>} iterables Other iterables
 * @returns {Iterable<any>} values from all provided iterables
 */
export const union = curry(function*(iterable1, iterable2, ...iterables) {
  const sets = [iterable1, iterable2, ...iterables].map(e => collectToSet(toIterableOrEmpty(e)));
  for (let i = 0; i < sets.length; ++i) {
    const set = sets[i];
    for (const val of set.values()) {
      let shouldYield = true;
      for (let j = 0; j < i; ++j) {
        if (sets[j].has(val)) {
          shouldYield = false;
          break;
        }
      }
      if (shouldYield) {
        yield val;
      }
    }
  }
});
