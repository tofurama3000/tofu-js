/**
 * @module obj:copyInto
 * @ignore
 */

import { curry } from '../fp/index';
import { cloneDeep } from '../utils/clone';

/**
 * Copies attributes from source into a target
 * @autocurried
 * @kind function
 * @param {obj} source The object to copy attributes from
 * @param {obj} target The object to copy attributes into
 */
export const copyInto = curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
});

/**
 * Copies attributes from source into a target
 * Values are deeply cloned when copied
 * @autocurried
 * @kind function
 * @param {obj} source The object to copy attributes from
 * @param {obj} target The object to copy attributes into
 */ export const copyIntoDeep = curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = cloneDeep(source[prop]);
    }
  }
  return target;
});
