/**
 * @module iterables:fromPairs
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';

type StrOrNum = string | number;
/**
 * Takes an iterable of key value pairs and returns an object formed from those key-value pairs
 *
 * E.g.
 * [['a', 5], ['b', 6]] => [{a: 5, b: 6}]
 *
 * @generator
 * @kind function
 * @param {Iterable<any[]>} pairs An iterable of key-value pairs
 * @returns {Object} An object
 */
export const fromPairs = function<T>(
  pairs: Iterable<[StrOrNum, T]>
): { [key: string]: T; [key: number]: T } {
  const p = toIterableOrEmpty<[StrOrNum, T]>(pairs);
  let obj = {};
  for (const [key, val] of p) {
    obj = Object.assign(obj, { [key]: val });
  }
  return obj;
};
