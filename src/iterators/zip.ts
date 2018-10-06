import { curry } from '../fp';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const zip = curry(function*(
  iterableLeft: Iterable<any>,
  iterableRight: Iterable<any>,
  ...moreIterables: Iterable<any>[]
) {
  const iterators = [iterableLeft, iterableRight]
    .concat(moreIterables)
    .map(isIterableOrEmpty)
    .map(iterable => iterable[Symbol.iterator]());

  while (true) {
    const next = iterators.map(iterator => iterator.next());
    const items = next.map(({ value, done }) => (done ? null : value));
    if (next.reduce((acc, cur) => acc && cur.done, true)) return;
    yield items;
  }
});
