import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const contains = curry(function(value, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (val === value) return true;
  }
  return false;
});
