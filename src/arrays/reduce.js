import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const reduce = curry((func, start, array) => toArrayOrEmpty(array).reduce(func, start));
