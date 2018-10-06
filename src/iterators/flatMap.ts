import { curry } from '../fp';
import { isIterable } from '../is';

export const flatMap = curry(function*(func: (val: any) => Iterable<any>, iterable: Iterable<any>) {
  for (let val of iterable) {
    const newIterable = func(val);
    if (isIterable(newIterable)) {
      for (let newVal of newIterable) yield newVal;
    } else {
      yield newIterable;
    }
  }
});
