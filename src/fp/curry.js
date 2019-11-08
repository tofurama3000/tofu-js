/**
 * @module fp:curry
 * @ignore
 */

/**
 * Auto-curries a function
 * @param {function} func Function to auto-curry
 * @returns {function}
 */
export const curry = func => {
  const curryImpl = providedArgs => (...args) => {
    const concatArgs = providedArgs.concat(args);
    if (concatArgs.length < func.length) {
      return curryImpl(concatArgs);
    }
    return func(...concatArgs);
  };

  return curryImpl([]);
};
