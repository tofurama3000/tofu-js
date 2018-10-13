import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const tap = curry(function*(func: (obj: any) => void, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  for (let val of iter) {
    func(val);
    yield val;
  }
});
