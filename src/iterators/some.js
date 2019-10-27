import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const some = curry(function(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    if (func(val)) return true;
  }
  return false;
});
