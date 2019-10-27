import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const map = curry((func, array) => toArrayOrEmpty(array).map(func));
