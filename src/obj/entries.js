import { isArray, isFunction, isIterable, isObject } from '../is';
import { collectToArray } from '../iterators';

export const entries = param => {
  if (param instanceof Map) {
    return collectToArray(param.entries());
  } else if (param instanceof Set) {
    return collectToArray(param.entries());
  } else if (isObject(param)) {
    if (isFunction(param.entries)) {
      const paramEntries = param.entries();
      if (isIterable(paramEntries)) return collectToArray(paramEntries);
    }
    return Object.entries(param);
  } else if (isArray(param)) {
    return param.map((v, i) => [i, v]);
  } else {
    return [];
  }
};
