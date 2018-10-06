import { curry } from '../fp';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const map = curry(function*(func: (obj: any) => any, iterable: Iterable<any>) {
  const iter = isIterableOrEmpty(iterable);
  for (let val of iter) yield func(val);
});
