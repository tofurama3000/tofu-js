import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const chunk = curry(function*(size: number, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  let chunk: any[] = [];
  for (let elem of iter) {
    if (chunk.length >= size) {
      yield chunk;
      chunk = [];
    }
    chunk.push(elem);
  }
  if (chunk.length) {
    yield chunk;
  }
});
