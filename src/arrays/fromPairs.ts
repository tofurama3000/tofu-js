import { toArrayOrEmpty } from './toArrayOrEmpty';

/**
 * @module arrays:fromPairs
 * @ignore
 */

type StrOrNum = string | number;

/**
 * Converts an array of key/value pairs into an object
 * @kind function
 * @param {any[]} array Array to operate on
 * @returns {Object} The resulting object
 */
export const fromPairs = function<T>(
  pairs: [StrOrNum, T][]
): { [key: string]: T; [key: number]: T } {
  return toArrayOrEmpty(pairs)
    .map(([key, val]) => ({ [key]: val }))
    .reduce((a, c) => Object.assign(a, c), {});
};
