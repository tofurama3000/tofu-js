import { curry } from '../fp';

export const limit = curry(function*(max: number, iterable: Iterable<any>) {
  let count = 0;
  for (let val of iterable) {
    if (count++ < (max | 0)) {
      yield val;
    } else {
      break;
    }
  }
});
