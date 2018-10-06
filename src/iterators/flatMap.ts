import { curry } from '../fp';
import { isIterable } from '../is';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const flatMap = curry(function*(func: (val: any) => Iterable<any>, iterable: Iterable<any>) {
  const iter = isIterableOrEmpty(iterable);
  for (let val of iter) {
    const newIterable = func(val);
    if (isIterable(newIterable)) {
      for (let newVal of newIterable) yield newVal;
    } else {
      yield newIterable;
    }
  }
});
