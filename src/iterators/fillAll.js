import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const fillAll = curry(function*(value, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const _ of iter) {
    yield value;
  }
});
