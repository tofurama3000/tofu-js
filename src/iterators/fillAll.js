import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const fillAll = curry(function*(value, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for(const _ of iter) {
    yield value
  }
});