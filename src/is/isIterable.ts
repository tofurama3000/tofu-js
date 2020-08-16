/**
 * @module is:isIterable
 * @ignore
 */
import { isObject } from './isObject';
import { isFunction } from './isFunction';

/**
 * Returns whether or not something is an iterable
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is an iterable
 */
export const isIterable = (param: any): param is Iterable<any> =>
  isObject(param) && isFunction(param[Symbol.iterator]);
