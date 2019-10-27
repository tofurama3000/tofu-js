import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const limit = curry(function*(max, iterable) {
  const iter = toIterableOrEmpty(iterable);
  let count = 0;
  for (const val of iter) {
    if (count++ < (max | 0)) {
      yield val;
    } else {
      break;
    }
  }
});
