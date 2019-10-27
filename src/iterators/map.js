import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const map = curry(function*(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) yield func(val);
});
