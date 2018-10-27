import { isObject } from './isObject';
import { isFunction } from './isFunction';

export const isIterable = (param: any): param is Iterable<any> =>
  isObject(param) && isFunction(param[Symbol.iterator]);
