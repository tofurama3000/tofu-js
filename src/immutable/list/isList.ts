/**
 * @module immutable:List:isList
 * @ignore
 */
import { isListSym, List } from './__list-sym';

/**
 * Returns whether or not an object is an immutable list
 * @param {any} obj The object to check
 * @returns {boolean} Whether it is an immutable list
 */
export function isList(obj: any): obj is List<any> {
  return typeof obj === 'object' && !!obj && !!obj[isListSym];
}
