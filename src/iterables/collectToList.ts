/**
 * @module iterables:collectToList
 * @ignore
 */
import { isInfinite } from '../is/isInfinite';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToList as listCollectToList } from '../immutable/list/index';
import { List } from '../immutable/list/__list-sym';

/**
 * Converts an iterable into an immutable List
 *
 * The maximum number of elements to iterate over can optionally be provided as well
 *
 * @kind function
 * @param {Iterable<any>} iterable The iterable to iterate over
 * @param {number} max (Optional, default Infinity) the maximum size of the resulting array
 * @returns {List<any>} returns the iterable as an immutable list
 */
export const collectToList = <T>(iterable: Iterable<T>, max: number = Infinity): List<T> => {
  const iter = isInfinite(max)
    ? toIterableOrEmpty<T>(iterable)
    : limit(max, toIterableOrEmpty<T>(iterable));
  return listCollectToList(iter);
};
