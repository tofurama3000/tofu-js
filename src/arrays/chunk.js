import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:chunk
 * @ignore
 */

 /**
  * Chunks an array into arrays of a maximum size
  * @autocurried
  * @kind function
  * @param {number} size Maximum chunk size
  * @param {any[]} array Array to chunk
  * @returns {any[][]} The chunked array
  */
export const chunk = curry((size, array) => {
  const arr = toArrayOrEmpty(array);
  const output = [];
  let chnk = [];
  for (const elem of arr) {
    if (chnk.length >= size) {
      output.push(chnk);
      chnk = [];
    }
    chnk.push(elem);
  }
  if (chnk.length) {
    output.push(chnk);
  }
  return output;
});
