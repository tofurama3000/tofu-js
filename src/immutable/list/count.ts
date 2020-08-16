/**
 * @module immutable:List:count
 * @ignore
 */

import { ListBase } from './__list-sym';

/**
 * Counts the number of elements in a list
 * @param {List} list List to operate on
 * @returns {number} The list size
 */
export function count<T>(list: ListBase<T>): number {
  let i = 0;
  for (const v of list) ++i;
  return i;
}
