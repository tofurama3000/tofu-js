import { curry } from '../fp';
import { isIterable } from '../is';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const flatten = curry(function*(iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  for (let val of iter) {
    if (isIterable(val)) {
      for (let innerVal of val) yield innerVal;
    } else {
      yield val;
    }
  }
});
