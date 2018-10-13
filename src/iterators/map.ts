import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const map = curry(function*(func: (obj: any) => any, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  for (let val of iter) yield func(val);
});
