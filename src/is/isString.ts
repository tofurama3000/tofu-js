/**
 * @module is:isString
 * @ignore
 */

/**
 * Returns whether or not something is a string
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is a string
 */
export const isString = (param: any): param is string => typeof param === 'string';
