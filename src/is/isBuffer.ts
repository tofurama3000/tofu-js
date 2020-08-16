/**
 * @module is:isBuffer
 * @ignore
 */

/**
 * Returns whether or not something is a Buffer
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is a buffer
 */
export const isBuffer = (obj: any): obj is Buffer => Buffer.isBuffer(obj);
