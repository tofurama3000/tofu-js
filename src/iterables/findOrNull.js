/**
 * @module iterables:findOrNull
 * @ignore
 */
import { findOr } from './findOr';

/**
 * Returns the first element in an iterable that a predicate returns true for or null if none is found
 * 
 * @autocurried
 * @kind function
 * @param {Predicate} predicate The predicate to test values with
 * @param {Iterable<any>} iterable The iterable to filter
 * @returns {any} The first element a predicate returned true for or null if none is found
 */
export const findOrNull = findOr(null);
