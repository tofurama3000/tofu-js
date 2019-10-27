import { curry } from '../fp';
import { collectToSet } from './collectToSet';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const union = curry(function*(iterable1, iterable2, ...iterables) {
  const sets = [iterable1, iterable2, ...iterables].map(e => collectToSet(toIterableOrEmpty(e)));
  for (let i = 0; i < sets.length; ++i) {
    const set = sets[i];
    for (const val of set.values()) {
      let shouldYield = true;
      for (let j = 0; j < i; ++j) {
        if (i === j) {
          continue;
        } else if (sets[j].has(val)) {
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
