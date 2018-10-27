import { isFunction } from '../is';

export function pipe(paramOrFunc: ((p: any) => any) | any, ...functions: Array<(p: any) => any>) {
  if (isFunction(paramOrFunc)) {
    return chain(paramOrFunc, ...functions);
  }
  return chain(...functions)(paramOrFunc);
}

function chain(...funcs: Array<(p: any) => any>) {
  return (param: any) => {
    let lastVal = param;
    for (const func of funcs) {
      lastVal = func(lastVal);
    }
    return lastVal;
  };
}
