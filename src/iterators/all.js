import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const all = curry(function(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (!func(val)) return false;
  }
  return true;
});
