/**
 * @module iterables:toIterableOrEmpty
 * @ignore
 */
import { isIterable } from '../is/isIterable';

/**
 * If the parameter is an iterable it is returned, otherwise an empty array is returned
 * 
 * @param {any} param An object to check if it is an iterable
 * @returns {Iterable<any>}
 */
export function toIterableOrEmpty(param) {
  if (!isIterable(param)) return [];
  return param;
}
