import { curry } from '../fp';

export const map = curry(function*(func: (obj: any) => any, iterable: Iterable<any>) {
  for (let val of iterable) yield func(val);
});
