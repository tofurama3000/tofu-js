/**
 * @module is:isMap
 * @ignore
 */

/**
 * Returns whether or not something is a Map
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is a Map
 */
export const isMap = (obj: any): obj is Map<any, any> => obj instanceof Map;
