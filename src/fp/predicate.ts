/**
 * @module fp:predicate
 * @ignore
 */

import { Predicate } from '../commonTypes';

/**
 * Performs the and operation on a group of predicates
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicates to and
 * @returns {Predicate}
 */
export const and = <T>(...predicates: Predicate<T>[]) => (param: T) =>
  [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;

/**
 * Performs the and operation on a group of predicates
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicates to and
 * @returns {Predicate}
 */
export const or = <T>(...predicates: Predicate<T>[]) => (param: T) =>
  [...predicates].reduce((a, p) => a || p(param), false);

/**
 * Performs the and operation on a group of predicates
 * This returns a function that takes a parameter to pass to the predicates
 *
 * Will return true if only one predicate returns true, false otherwise
 *
 * @param  {...Predicate} predicates Predicates to and
 * @returns {Predicate}
 */
export const xor = <T>(...predicates: Predicate<T>[]) => (param: T) =>
  [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

/**
 * Negates a predicate
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicate to negate
 * @returns {Predicate}
 */
export const negate = <T>(p1: Predicate<T>) => (param: T) => !p1(param);

/**
 * Converts a function into a predicate
 * (Predicates are functions that take one input and return either true or false)
 * @param {function} func Function to transform
 * @returns {Predicate}
 */
export const toPredicate = <T>(func: (param: T) => any) => (param: T) => !!func(param);

/**
 * Converts a boolean into a predicate that always returns the same value
 * @param {boolean} b Boolean to return
 * @returns {Predicate}
 */
export const boolToPredicate = (b: boolean): Predicate<any> => (_: any) => b;
