/**
 * @module fp:reverseCurry
 * @ignore
 */
import { reverseArgs } from './reverseArgs';

/**
 * Reverses the order of arguments and auto-curries a function
 * @param {function} func Function to reverse the arguments for and auto-curry
 * @returns {function}
 */
export const reverseCurry = func => {
  const curryImpl = providedArgs => (...args) => {
    const concatArgs = providedArgs.concat(args);
    if (concatArgs.length < func.length) {
      return curryImpl(concatArgs);
    }
    return reverseArgs(func)(...concatArgs);
  };

  return curryImpl([]);
};
