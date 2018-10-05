import { isInfinite } from '../is';
import { curry } from '../fp';

export const limit = curry((max: number, iterable: Iterable<any>) => {
  return (function*() {
    let count = 0;
    for (let val of iterable) {
      if (count++ < (max | 0)) {
        yield val;
      } else {
        break;
      }
    }
  })();
});

export const collectToArray = (iterable: Iterable<any>, max: number = Infinity) =>
  isInfinite(max) ? [...iterable] : collectToArray(limit(max, iterable));

export const map = curry((func: (obj: any) => any, iterable: Iterable<any>) => {
  return (function*() {
    for (let val of iterable) yield func(val);
  })();
});

export const scan = curry(
  (func: (acc: any, obj: any) => any, start: any, iterable: Iterable<any>) => {
    return (function*() {
      let accumulated = start;
      for (let val of iterable) {
        accumulated = func(accumulated, val);
        yield accumulated;
      }
    })();
  }
);
