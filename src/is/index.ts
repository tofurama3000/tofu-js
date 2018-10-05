export function isFunction(param: any) {
  return typeof param === 'function';
}

export function isUndefined(param: any) {
  return typeof param === 'undefined';
}

export function isNull(param: any) {
  return param === null;
}

export function isNil(param: any) {
  return isNull(param) || isUndefined(param);
}
