import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const fill = curry(function*(start, end, value, iterable) {
  let index = 0;
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (index >= start && index < end) {
      index++;
      yield value;
      continue;
    }
    index++;
    yield val;
  }
});
