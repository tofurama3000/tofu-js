/**
 * @module is:isInfinite
 * @ignore
 */

/**
 * Returns whether or not something is an infinite number
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is infinite
 */ export const isInfinite = param => param === Infinity || param === -Infinity;
