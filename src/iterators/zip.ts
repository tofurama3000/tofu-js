import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export interface ZipInterface {
  (): ZipInterface;
  (a: Iterable<any>): (b: Iterable<any>) => Iterable<any>;
  (a: Iterable<any>, b: Iterable<any>, ...args: Array<Iterable<any>>): Iterable<any>;
}

export const zip = (curry(function*(
  iterableLeft: Iterable<any>,
  iterableRight: Iterable<any>,
  ...moreIterables: Array<Iterable<any>>
) {
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
}) as any) as ZipInterface;
