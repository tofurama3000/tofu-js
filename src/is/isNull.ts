/**
 * @module is:isNull
 * @ignore
 */

/**
 * Returns whether or not something is null
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is null
 */
export const isNull = (param: any): param is null => param === null;
