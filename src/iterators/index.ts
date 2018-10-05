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

export const tap = curry((func: (obj: any) => void, iterable: Iterable<any>) => {
  return (function*() {
    for (let val of iterable) {
      func(val);
      yield val;
    }
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

export const asyncProcess = (iterable: Iterable<any>, delay: number = 0) => {
  const iterator = iterable[Symbol.iterator]();
  function getNext() {
    const item = iterator.next();
    if (!item.done) {
      setTimeout(getNext, delay | 0);
    }
  }
  getNext();
};

export function* zip(
  iterableLeft: Iterable<any>,
  iterableRight: Iterable<any>,
  ...moreIterables: Iterable<any>[]
) {
  const iterators = [iterableLeft, iterableRight]
    .concat(moreIterables)
    .map(iterable => iterable[Symbol.iterator]());

  while (true) {
    const next = iterators.map(iterator => iterator.next());
    const items = next.map(({ value, done }) => (done ? null : value));
    if (next.reduce((acc, cur) => acc && cur.done, true)) return;
    yield items;
  }
}
