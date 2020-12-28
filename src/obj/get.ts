import { isArray, isFunction, isIterable, isNil, isObject } from '../is';
import { forEach } from '../iterables';
import { curry } from '../fp';

/**
 * Gets a value in an array or object. Returns the default value if the key is not present or the entity is not an object
 * @param {string|number} key Key to grab
 * @param {any} defaultValue Default value to return
 * @param {any} obj Object to grab a value out of
 */
export const getOr = curry((key: string | number, defaultValue: any, obj: any) =>
  (isArray(obj) || isObject(obj) || isFunction(obj)) && !isNil(obj) && key in obj
    ? obj[key]
    : defaultValue
);

/**
 * Gets a value in an array or object. Returns null if the key is not present or the entity is not an object
 * @param {string|number} key Key to grab
 * @param {any} obj Object to grab a value out of
 */
export const get = curry((key: string | number, obj: any) => getOr(key, null, obj));

/**
 * Gets a value in an array or object. Does this by following a path and doing a null check at each segment.
 * Returns the default value if the key is not present or the path is invalid (e.g. not an object/array)
 *
 * E.g.
 * (getInOr(['a', 'b', 1], {a: {b: [12, 5, 14]}}) will return 5
 *
 * @param {Iterable<string|number>|string|number} path Path of keys to follow
 * @param {any} defaultValue Default value to return
 * @param {any} obj Object to grab a value out of
 */
export const getInOr = curry(
  (path: Iterable<string | number> | string | number, defaultValue: any, obj: any) => (
    forEach(segment => (obj = getOr(segment, defaultValue, obj)), isIterable(path) ? path : [path]),
    obj
  )
);

/**
 * Gets a value in an array or object. Does this by following a path and doing a null check at each segment.
 * Returns null if the key is not present or the path is invalid (e.g. not an object/array)
 *
 * E.g.
 * (getIn(['a', 'b', 1], {a: {b: [12, 5, 14]}}) will return 5
 *
 * @param {Iterable<string|number>|string|number} path Path of keys to follow
 * @param {any} obj Object to grab a value out of
 */
export const getIn = curry((path: Iterable<string | number> | string | number, obj: any) =>
  getInOr(path, null, obj)
);
