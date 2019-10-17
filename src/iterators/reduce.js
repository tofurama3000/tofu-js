import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const reduce = curry(function(func, start, iterable) {
  const iter = toIterableOrEmpty(iterable);
  let accumulated = start;
  for (const val of iter) {
    accumulated = func(accumulated, val);
  }
  return accumulated;
});
