/**
 * @module immutable:List:count
 * @ignore
 */

/**
 * Counts the number of elements in a list
 * @param {List} list List to operate on
 * @returns {number} The list size
 */
export function count(list) {
  let i = 0;
  for (const v of list) ++i;
  return i;
}
