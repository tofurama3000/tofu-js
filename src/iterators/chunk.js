import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const chunk = curry(function*(size, iterable) {
  const iter = toIterableOrEmpty(iterable);
  let chunks = [];
  for (const elem of iter) {
    if (chunks.length >= size) {
      yield chunks;
      chunks = [];
    }
    chunks.push(elem);
  }
  if (chunks.length) {
    yield chunks;
  }
});
