/**
 * @module fp:pipe
 * @ignore
 */
import { isFunction } from '../is/isFunction';

/**
 * Pipes an input through a series of functions
 *
 * If the first parameter is a function, then pipe() will return a function
 * that accepts an input to pipe. Otherwise, it will pipe the first parameter
 * through the provided functions
 *
 * @param {function | any} paramOrFunc Either the input to pipe or a function to pipe through
 * @param  {...any} functions Functions to pipe through
 * @returns {function | any}
 */
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
