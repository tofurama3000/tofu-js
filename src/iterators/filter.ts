import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const filter = curry(function*(func: (param: any) => boolean, iterable: Iterable<any>) {
  const iter = toIterableOrEmpty(iterable);
  for (const val of iter) {
    if (func(val)) yield val;
  }
});
