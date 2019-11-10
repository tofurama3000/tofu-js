/**
 * @module fp:predicate
 * @ignore
 */

/**
 * Performs the and operation on a group of predicates
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicates to and
 * @returns {Predicate}
 */
export const and = (...predicates) => param =>
  [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;

/**
 * Performs the and operation on a group of predicates
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicates to and
 * @returns {Predicate}
 */
export const or = (...predicates) => param =>
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
export const xor = (...predicates) => param =>
  [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

/**
 * Negates a predicate
 * This returns a function that takes a parameter to pass to the predicates
 * @param  {...Predicate} predicates Predicate to negate
 * @returns {Predicate}
 */
export const negate = p1 => param => !p1(param);

/**
 * Converts a function into a predicate
 * (Predicates are functions that take one input and return either true or false)
 * @param {function} func Function to transform
 * @returns {Predicate}
 */
export const toPredicate = func => param => !!func(param);

/**
 * Converts a boolean into a predicate that always returns the same value
 * @param {boolean} b Boolean to return
 * @returns {Predicate}
 */
export const boolToPredicate = b => () => b;
