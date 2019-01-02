import { isArray, isFunction, isIterable, isObject } from '../is';
import { collectToArray } from '../iterators';

export const entries = (param: any) => {
  if (param instanceof Map) {
    return collectToArray(param.entries());
  } else if (param instanceof Set) {
    return collectToArray(param.entries());
  } else if (isObject(param)) {
    if (isFunction((param as any).entries)) {
      const paramEntries = (param as any).entries();
      if (isIterable(paramEntries)) return collectToArray(paramEntries);
    }
    return Object.entries(param);
  } else if (isArray(param)) {
    return param.map((v, i) => [i, v]);
  } else {
    return [];
  }
};
