import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const reduce = curry((func, start, array) => toArrayOrEmpty(array).reduce(func, start));
