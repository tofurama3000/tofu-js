/**
 * @module iterables:zip
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';

/**
 * Takes the corresponding elements of each iterable based on index and groups them
 *
 * E.g.
 * `zip([1, 2, 3], ['a', 'b', 'c'], [4, 5, 6]) => [[1, 'a', 4], [2, 'b', 5], [3, 'c', 6]]`
 *
 * @autocurried
 * @generator
 * @kind function
 * @param {Iterable<any>} iterable1 The first iterable to iterate over
 * @param {Iterable<any>} iterable2 The second iterable to iterate over
 * @param {...Iterable<any>} iterables Other iterables to iterate over
 * @returns {Iterable<any>} values from all provided iterables grouped by index
 */
export const zip = curry(function*(iterable1, iterable2, ...iterables) {
  const iterators = [iterable1, iterable2]
    .concat(iterables)
    .map(toIterableOrEmpty)
    .map(iterable => iterable[Symbol.iterator]());

  while (true) {
    const next = iterators.map(iterator => iterator.next());
    const items = next.map(({ value, done }) => (done ? null : value));
    if (next.reduce((acc, cur) => acc && cur.done, true)) return;
    yield items;
  }
});
