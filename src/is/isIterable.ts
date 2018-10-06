import { isObject } from './isObject';
import { isFunction } from './isFunction';

export const isIterable = (param: any) => isObject(param) && isFunction(param[Symbol.iterator]);
