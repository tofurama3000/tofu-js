/**
 * @module immutable:List:isEmpty
 * @ignore
 */

import { ListBase } from './__list-sym';

/**
 * Returns whether or not a list is empty
 * @param {List} list List to check
 * @returns {boolean} Whether or not it is empty
 */
export function isEmpty<T>(list: ListBase<T>): boolean {
  return !list.length;
}
