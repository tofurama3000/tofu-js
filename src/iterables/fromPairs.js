/**
 * @module iterables:fromPairs
 * @ignore
 */
import { toIterableOrEmpty } from './toIterableOrEmpty';

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
export const fromPairs = function(pairs) {
  const p = toIterableOrEmpty(pairs);
  let obj = {};
  for (const [key, val] of p) {
    obj = Object.assign(obj, { [key]: val });
  }
  return obj;
};
