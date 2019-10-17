import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const map = curry(function*(func, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) yield func(val);
});
