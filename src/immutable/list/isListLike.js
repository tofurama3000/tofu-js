/**
 * @module immutable:List:isListLike
 * @ignore
 */
import { isList } from './isList';

/**
 * Returns whether or not an object can be operated on similar to an immutable list
 * @param {any} obj Object to check
 * @returns {boolean} Whether or not it is list-like
 */
export function isListLike(obj) {
  if (isList(obj)) {
    return true;
  }
  if (!Array.isArray(obj)) {
    return false;
  }
  let curList = obj;
  while (curList && curList.length === 2) {
    if (!Array.isArray(curList[1])) {
      return false;
    }
    curList = curList[1];
  }
  return curList && curList.length === 0;
}
