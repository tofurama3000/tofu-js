import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp';

export const take = curry(function*(limit: number, iterable: Iterable<any>) {
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
