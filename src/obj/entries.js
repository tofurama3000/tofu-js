import { collectToArray } from '../iterators/collectToArray';
import { isFunction } from '../is/isFunction';
import { isIterable } from '../is/isIterable';
import { isObject } from '../is/isObject';
import { map } from '../iterators/map';

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
