import { curry } from '../fp';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const tap = curry(function*(func: (obj: any) => void, iterable: Iterable<any>) {
  const iter = isIterableOrEmpty(iterable);
  for (let val of iter) {
    func(val);
    yield val;
  }
});
