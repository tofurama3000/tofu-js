/**
 * @module utils:clone
 * @ignore
 */

import { isArray } from '../is/isArray';
import { isBuffer } from '../is/isBuffer';
import { isSet } from '../is/isSet';
import { isMap } from '../is/isMap';
import { isObject } from '../is/isObject';

import { map } from '../arrays/index';
import { reduce } from '../iterables/reduce';

/**
 * Performs a shallow clone
 * Shallow clones don't copy any nested objects, arrays, etc
 * @param {any} toClone what should be cloned
 * @returns {any} cloned object
 */
export function cloneShallow(toClone) {
  if (isArray(toClone)) return toClone.slice(0);
  else if (isBuffer(toClone)) return Buffer.from(toClone);
  else if (isSet(toClone)) return reduce((a, c) => a.add(c), new Set(), toClone.values());
  else if (isMap(toClone))
    return reduce((a, [key, val]) => a.set(key, val), new Map(), toClone.entries());
  else if (isObject(toClone)) return Object.assign({}, toClone);
  else return toClone;
}

/**
 * Performs a deep clone
 * Deep clones will also clone any nested objects, arrays, etc
 * @param {any} toClone what should be cloned
 * @returns {any} cloned object
 */
export function cloneDeep(toClone) {
  if (isArray(toClone)) return map(cloneDeep, toClone);
  else if (isBuffer(toClone)) return Buffer.from(toClone);
  else if (isSet(toClone))
    return reduce((a, c) => a.add(cloneDeep(c)), new Set(), toClone.values());
  else if (isMap(toClone))
    return reduce(
      (a, [key, val]) => a.set(cloneDeep(key), cloneDeep(val)),
      new Map(),
      toClone.entries()
    );
  else if (isObject(toClone)) {
    const copy = {};
    // tslint:disable
    for (const prop in toClone) {
      copy[prop] = cloneDeep(toClone[prop]);
    }
    // tslint:enable
    return copy;
  } else return toClone;
}
