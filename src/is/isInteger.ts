/**
 * @module is:isInteger
 * @ignore
 */

/**
 * Returns whether or not something is an integer
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is an integer
 */
export const isInteger = (param: any): param is number => (param | 0) === param;
