import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToArray } from './collectToArray';

export function* reverse(iterable) {
  const iter = toIterableOrEmpty(iterable);
  const arr = collectToArray(iter);

  for (let i = arr.length - 1; i >= 0; --i) {
    yield arr[i];
  }
}
