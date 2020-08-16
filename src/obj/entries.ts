/**
 * @module obj:entries
 * @ignore
 */

import { collectToArray } from '../iterables/collectToArray';
import { isIterable } from '../is/isIterable';
import { isObject } from '../is/isObject';
import { map } from '../iterables/map';

/**
 * Grabs entries for an object (for both string and symbol properties)
 * @kind function
 * @param {object | Map | Set | Array | Iterable} param
 * @returns any[][]
 */
export const entries = (param: Object | Map<any, any> | Set<any> | any[] | Iterable<any> | any) => {
  if (param instanceof Map) {
    return collectToArray(param.entries());
  } else if (param instanceof Set) {
    return collectToArray(param.entries());
  } else if (isIterable(param)) {
    let index = 0;
    return collectToArray(map(e => [index++, e], param));
  } else if (isObject(param)) {
    return (Object.entries(param) as [any, any]).concat(
      Object.getOwnPropertySymbols(param).map(k => [k, param[k]])
    );
  } else {
    return [];
  }
};
