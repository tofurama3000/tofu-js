/**
 * @module is:isFunction
 * @ignore
 */

/**
 * Returns whether or not something is a function
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is a function
 */
export const isFunction = (param: any): param is Function => typeof param === 'function';
