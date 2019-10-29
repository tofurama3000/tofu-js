import { curry } from '../fp/curry';
/**
 * @module arrays:zip
 * @ignore
 */

 /**
  * Takes two or more arrays and groups elements by index from each array
  * 
  * E.g.
  * `zip([1, 2, 3], [4, 5, 6]) => [[1, 4], [2, 5], [3, 6]]`
  * 
  * @kind function
  * @autocurried
  * @param {any[]} arrLeft The first array to zip
  * @param {any[]} arrRight The second array to zip
  * @param {...any[]} moreArrays Other arrays to zip
  * @returns {any[][]} The resulting array
  */
export const zip = curry((arrLeft, arrRight, ...moreArrays) => {
  const arrays = [arrLeft, arrRight, ...moreArrays];
  const maxLen = Math.max(...arrays.map(a => a.length));

  const res = [];
  for (let i = 0; i < maxLen; ++i) {
    res.push(arrays.map(a => (i < a.length ? a[i] : null)));
  }
  return res;
});
