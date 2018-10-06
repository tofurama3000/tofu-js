import { curry } from '../fp';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const filter = curry(function*(func: (param: any) => boolean, iterable: Iterable<any>) {
  const iter = isIterableOrEmpty(iterable);
  for (let val of iter) {
    if (func(val)) yield val;
  }
});
