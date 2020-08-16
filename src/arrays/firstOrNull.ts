import { firstOr } from './firstOr';
import { Nullable } from '../commonTypes';

/**
 * @module arrays:firstOrNull
 * @ignore
 */

/**
 * Returns the first element of an array or null if the array is empty
 * @kind function
 * @param {any[]} array Array to operate on
 * @returns {any | null} The first array element
 */
export const firstOrNull = firstOr(null) as <T>(param: T[]) => Nullable<T>;
