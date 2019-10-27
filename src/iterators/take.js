import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp/curry';

export const take = curry(function*(limit, iterable) {
  let i = 0;
  const iter = toIterableOrEmpty(iterable);
  for (const v of iter) {
    if (i++ < limit) {
      yield v;
    } else {
      return;
    }
  }
});
