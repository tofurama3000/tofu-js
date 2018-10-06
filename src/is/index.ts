export const isFunction = (param: any) => typeof param === 'function';
export const isUndefined = (param: any) => typeof param === 'undefined';
export const isNull = (param: any) => param === null;
export const isNil = (param: any) => isNull(param) || isUndefined(param);
export const isInfinite = (param: any) => param === Infinity || param === -Infinity;
export const isObject = (param: any) => param === Object(param);
export const isIterable = (param: any) => isObject(param) && isFunction(param[Symbol.iterator]);
