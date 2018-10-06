import { curry } from '../fp';

export const filter = curry(function*(func: (param: any) => boolean, iterable: Iterable<any>) {
  for (let val of iterable) {
    if (func(val)) yield val;
  }
});
