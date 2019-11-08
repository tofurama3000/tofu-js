import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';
/**
 * @module arrays:takeWhile
 * @ignore
 */

 /**
  * Takes elements from the array so long as the predicate returns true for each element
  * @kind function
  * @autocurried
  * @param {Predicate} whileFunc Predicate to determine when to stop taking elements
  * @param {any[]} array Array to operate on
  * @returns {any[]} The resulting array
  */
export const takeWhile = curry((whileFunc, array) => {
  const arr = toArrayOrEmpty(array);
  const res = [];
  for (const val of arr) {
    if (whileFunc(val)) res.push(val);
    else return res;
  }
  return res;
});
