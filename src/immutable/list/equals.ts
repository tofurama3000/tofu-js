/**
 * @module immutable:List:equals
 * @ignore
 */

import { ListBase, IList } from './__list-sym';

/**
 * Returns whether or not two lists are equal
 *
 * Lists are considered equal if they have identical elements
 *
 * @param {List} list1 The first list to check
 * @param {List} list2 The second list to check
 * @returns {boolean} Whether or not they are equal
 */
export function equals<T>(list1: ListBase<T> | IList<T>, list2: ListBase<T> | IList<T>): boolean {
  let curList1 = list1;
  let curList2 = list2;
  while (curList1 && curList2 && curList1.length && curList2.length) {
    if (curList1[0] !== curList2[0]) {
      return false;
    }
    curList1 = curList1[1];
    curList2 = curList2[1];
  }
  return curList1 && curList2 && curList2.length === curList1.length;
}
