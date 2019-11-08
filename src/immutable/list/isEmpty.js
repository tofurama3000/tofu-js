/**
 * @module immutable:List:isEmpty
 * @ignore
 */

/**
 * Returns whether or not a list is empty
 * @param {List} list List to check
 * @returns {boolean} Whether or not it is empty
 */
export function isEmpty(list) {
  return !list.length;
}
