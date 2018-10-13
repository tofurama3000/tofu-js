import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const limit = curry(function*(max: number, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  let count = 0;
  for (let val of iter) {
    if (count++ < (max | 0)) {
      yield val;
    } else {
      break;
    }
  }
});
