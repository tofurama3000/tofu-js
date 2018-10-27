import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const chunk = curry(function*(size: number, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  let chunks: any[] = [];
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
