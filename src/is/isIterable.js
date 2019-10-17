import { isObject } from './isObject';
import { isFunction } from './isFunction';

export const isIterable = param => isObject(param) && isFunction(param[Symbol.iterator]);
