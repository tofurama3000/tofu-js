import { curry } from '../fp';

export const tap = curry(function*(func: (obj: any) => void, iterable: Iterable<any>) {
  for (let val of iterable) {
    func(val);
    yield val;
  }
});
