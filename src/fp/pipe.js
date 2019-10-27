import { isFunction } from '../is/isFunction';

export const pipe = (paramOrFunc, ...functions) => {
  if (isFunction(paramOrFunc)) {
    return chain(paramOrFunc, ...functions);
  }
  return chain(...functions)(paramOrFunc);
};

function chain(...funcs) {
  return param => {
    let lastVal = param;
    for (const func of funcs) {
      lastVal = func(lastVal);
    }
    return lastVal;
  };
}
