/**
 * @module is:isSet
 * @ignore
 */

/**
 * Returns whether or not something is a Set
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is a Set
 */
export const isSet = (obj: any): obj is Set<any> => obj instanceof Set;
