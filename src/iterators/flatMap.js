import { curry } from '../fp';
import { isIterable } from '../is';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const flatMap = curry(function*(func, iterable) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    const newIterable = func(val);
    if (isIterable(newIterable)) {
      for (const newVal of newIterable) yield newVal;
    } else {
      yield newIterable;
    }
  }
});
