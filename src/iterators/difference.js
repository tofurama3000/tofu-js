import { curry } from '../fp';
import { collectToSet } from './collectToSet';
import { toIterableOrEmpty } from './toIterableOrEmpty';

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
