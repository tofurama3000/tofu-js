/**
 * @module fp:reverseArgs
 * @ignore
 */

/**
 * Reverses the order arguments are passed to a function
 * @param {function} func Function to reverse argument order for
 * @returns {function} Function that will reverse the arguments
 */
export function reverseArgs(func) {
  return (...args) => {
    return func(...args.reverse());
  };
}
