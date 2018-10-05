export const isFunction = (param: any) => typeof param === 'function';
export const isUndefined = (param: any) => typeof param === 'undefined';
export const isNull = (param: any) => param === null;
export const isNil = (param: any) => isNull(param) || isUndefined(param);
