import { curry } from '../fp';
import { isIterable } from '../is';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const flatten = curry(function*(iterable: Iterable<any>) {
  const iter = isIterableOrEmpty(iterable);
  for (let val of iter) {
    if (isIterable(val)) {
      for (let innerVal of val) yield innerVal;
    } else {
      yield val;
    }
  }
});
