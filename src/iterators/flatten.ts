import { curry } from '../fp';
import { isIterable } from '../is';

export const flatten = curry(function*(iterable: Iterable<any>) {
  for (let val of iterable) {
    if (!isIterable(val)) yield val;
    else for (let innerVal of val) yield innerVal;
  }
});
