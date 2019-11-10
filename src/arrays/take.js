import { limit } from './limit';

/**
 * @module arrays:take
 * @ignore
 */

/**
 * Alias for limit
 * @kind function
 * @autocurried
 * @param {number} max Maximum number of elements in the array
 * @param {any[]} array Array to operate on
 * @returns {any[]} The resulting array
 */
export const take = limit;
