import { curry } from '../fp';
import { collectToSet } from './collectToSet';

export const difference = curry(function*(iterable1, iterable2, ...iterables) {
  const sets = [iterable1, iterable2, ...iterables].map(e => collectToSet(e))
  for(let i = 0; i < sets.length; ++i) {
    const set = sets[i]
    for(const val of set.values()) {
      let shouldYield = true;
      for(let j = 0; j < sets.length; ++j) {
        if (i === j) {
          continue;
        } else if (sets[j].has(val)) {
          shouldYield = false;
          break;
        }
      }
      if (shouldYield){
        yield val;
      }
    }
  }
});
