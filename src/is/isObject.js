/**
 * @module is:isObject
 * @ignore
 */

/**
 * Returns whether or not something is an Object
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is an Object
 */
export const isObject = param => param === Object(param);
