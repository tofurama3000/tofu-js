/**
 * @module iterables:groupBy
 * @ignore
 */
import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { isArray, isFunction, isNil, isObject } from '../is';

/**
 * Takes an iterable of values and groups them by the result of calling a function
 *
 * @generator
 * @kind function
 * @param {function} func A function to call to group elements by
 * @param {Iterable<any>} iterable An iterable to iterate over
 * @returns {Object} An object where the result of func is the key and an array of elements that provided that key is the value
 */
export const groupBy = curry(function(
  func: (any) => any,
  iterable: Iterable<any>
): { [key: string]: any[]; [key: number]: any[] } {
  const result = {};
  for (const val of toIterableOrEmpty(iterable)) {
    const key = func(val);
    result[key] = result[key] || [];
    result[key].push(val);
  }
  return result;
});

const get = curry((key: string | number, obj: any) =>
  (isArray(obj) || isObject(obj) || isFunction(obj)) && !isNil(obj) && key in obj ? obj[key] : null
);

/**
 * Takes an iterable of values and groups them by a key
 *
 * @generator
 * @kind function
 * @param {string|number} key The key to group by
 * @param {Iterable<any>} iterable An iterable to iterate over
 * @returns {Object} An object where the result of func is the key and an array of elements that provided that key is the value
 */
export const groupByKey = curry((key: string | number, iterable: Iterable<any>): {
  [key: string]: any[];
  [key: number]: any[];
} => groupBy(get(key), iterable));

/**
 * Takes an iterable of values and indexes them by the result of a function
 *
 * @generator
 * @kind function
 * @param {function} func The function to index by
 * @param {Iterable<any>} iterable An iterable to iterate over
 * @returns {Object} An object where the result of func is the key and an array of elements that provided that key is the value
 */
export const indexBy = curry((func: (any) => any, iterable: Iterable<any>): {
  [key: string]: any;
  [key: number]: any;
} => {
  const result = {};
  for (const val of toIterableOrEmpty(iterable)) {
    const key = func(val);
    result[key] = val;
  }
  return result;
});

/**
 * Takes an iterable of values and indexes them by a key
 *
 * @generator
 * @kind function
 * @param {string|number} key The key to index by
 * @param {Iterable<any>} iterable An iterable to iterate over
 * @returns {Object} An object where the result of func is the key and an array of elements that provided that key is the value
 */
export const indexByKey = curry((key: string, iterable: Iterable<any>): {
  [key: string]: any[];
  [key: number]: any[];
} => indexBy(get(key), iterable));
