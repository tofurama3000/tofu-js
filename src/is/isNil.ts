/**
 * @module is:isNil
 * @ignore
 */

import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Returns whether or not something is either null or undefined
 * @kind function
 * @param {any} obj the object to test
 * @returns {boolean} Whether or not it is either null or undefined
 */
export const isNil = (param): param is null | undefined => isNull(param) || isUndefined(param);
