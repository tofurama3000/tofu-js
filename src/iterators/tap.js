import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const tap = curry(function*(func, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    func(val);
    yield val;
  }
});
