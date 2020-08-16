/**
 * @module arrays:toArrayOrEmpty
 * @ignore
 */

/**
 * If the element is an array, it returns the array; otherwise it returns an empty array
 * @kind function
 * @autocurried
 * @param {any} obj Object to check
 * @returns {any[]} The resulting array
 */
export function toArrayOrEmpty<T>(obj: T[] | any): T[] {
  if (Array.isArray(obj)) return obj;
  return [];
}
