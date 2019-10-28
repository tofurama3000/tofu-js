/**
 * @module obj:entries
 * @ignore
 */

import { collectToArray } from '../iterables/collectToArray';
import { isIterable } from '../is/isIterable';
import { isObject } from '../is/isObject';
import { map } from '../iterables/map';

/**
 * Grabs entries for an object
 * @kind function
 * @param {object | Map | Set | Array | Iterable} param 
 */
export const entries = param => {
  if (param instanceof Map) {
    return collectToArray(param.entries());
  } else if (param instanceof Set) {
    return collectToArray(param.entries());
  } else if (isIterable(param)) {
    let index = 0;
    return collectToArray(map(e => [index++, e], param));
  } else if (isObject(param)) {
    return Object.entries(param);
  } else {
    return [];
  }
};
