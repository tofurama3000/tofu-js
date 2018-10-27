import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const map = curry(function*(func: (elem: any) => any, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) yield func(val);
});
