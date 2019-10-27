import { curry } from '../fp/curry';
import { isIterable } from '../is/isIterable';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const flatten = curry(function*(iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (isIterable(val)) {
      for (const innerVal of val) yield innerVal;
    } else {
      yield val;
    }
  }
});
