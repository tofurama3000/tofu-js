import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const zip = curry(function*(iterableLeft, iterableRight, ...moreIterables) {
  const iterators = [iterableLeft, iterableRight]
    .concat(moreIterables)
    .map(toIterableOrEmpty)
    .map(iterable => iterable[Symbol.iterator]());

  while (true) {
    const next = iterators.map(iterator => iterator.next());
    const items = next.map(({ value, done }) => (done ? null : value));
    if (next.reduce((acc, cur) => acc && cur.done, true)) return;
    yield items;
  }
});
