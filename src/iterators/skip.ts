import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const skip = curry(function*(amt: number = 1, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable)[Symbol.iterator]();
  let isDone = false;
  for (let i = 0; i < amt && !isDone; ++i) {
    isDone = iter.next().done;
  }
  if (isDone) return;
  while (true) {
    const { done, value } = iter.next();
    if (done) return;
    yield value;
  }
});
