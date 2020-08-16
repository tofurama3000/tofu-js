/**
 * @module logic:basic
 * @ignore
 */

/**
 * Ands a group of booleans
 *
 * @kind function
 * @param  {...boolean} bools list of booleans
 * @returns {boolean} result of and on all of them
 */
export const and = (...bools: boolean[]): boolean =>
  bools.reduce((a, b) => a && b, true) && !!bools.length;

/**
 * Ors a group of booleans
 *
 * @kind function
 * @param  {...boolean} bools list of booleans
 * @returns {boolean} result of or on all of them
 */
export const or = (...bools: boolean[]): boolean => bools.reduce((a, b) => a || b, false);

/**
 * Xors a group of booleans (only returns true if one and only one is true)
 *
 * @kind function
 * @param  {...boolean} bools list of booleans
 * @returns {boolean} result of xor on all of them
 */
export const xor = (...bools: boolean[]): boolean => bools.reduce((a, b) => a + +b, 0) === 1;

/**
 * Negates a boolean
 *
 * @kind function
 * @param  {boolean} bool boolean to negate
 * @returns {boolean} negation of the boolean
 */
export const negate = (bool: boolean) => !bool;

/**
 * Negates a group of booleans
 *
 * @kind function
 * @param  {...boolean} bools list of booleans
 * @returns {boolean[]} result of negating each boolean
 */
export const negateAll = (...bools: boolean[]) => bools.map(b => negate(b));
