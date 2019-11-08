/**
 * @module fp:spread
 * @ignore
 */
import { curry } from './curry';

/**
 * Takes a function and an array of arguments and spreads the array into function arguments
 * @autocurried
 * @kind function
 * @param {function} func Function to auto-curry
 * @param {any[]} args Arguments to pass to func
 * @returns {any} Result of calling func(...args)
 */
export const spread = curry((func, args) => func(...args));
