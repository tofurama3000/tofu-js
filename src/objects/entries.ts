import { isArray, isFunction, isIterable, isObject } from '../is';
import { collectToArray } from '../iterators';

export const entries = (obj: any) => {
  if (obj instanceof Map) {
    return collectToArray(obj.entries());
  } else if (obj instanceof Set) {
    return collectToArray(obj.entries());
  } else if (isObject(obj)) {
    if (isFunction(obj.entries)) {
      const entries = obj.entries();
      if (isIterable(entries)) return collectToArray(entries);
    }
    return Object.entries(obj);
  } else if (isArray(obj)) {
    return obj.map((v, i) => [i, v]);
  } else {
    return [];
  }
};
