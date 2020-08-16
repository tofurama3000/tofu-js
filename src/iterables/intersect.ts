/**
 * @module iterables:intersect
 * @ignore
 */
import { curry } from '../fp/curry';
import { collectToSet } from './collectToSet';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Returns only the items that appear in all iterables
 *
 * Note: It uses the Set.has function to find matches
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable1 The first iterable to get values from
 * @param {Iterable<any>} iterable2 The second iterable to get values from
 * @param {...Iterable<any>} iterables Other iterables
 * @returns {Iterable<any>} values that only occur in all provided iterables
 */
export const intersect = curry(function*(
  iterable1: Iterable<any>,
  iterable2: Iterable<any>,
  ...iterables: Iterable<any>[]
): Iterable<any> {
  const sets = [iterable2, ...iterables].map(e => collectToSet(toIterableOrEmpty(e)));
  for (const val of collectToSet(toIterableOrEmpty(iterable1))) {
    let shouldYield = true;
    for (const set of sets) {
      if (!set.has(val)) {
        shouldYield = false;
        break;
      }
    }
    if (shouldYield) {
      yield val;
    }
  }
});
