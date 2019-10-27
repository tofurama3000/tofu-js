import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const filter = curry((func, array) => toArrayOrEmpty(array).filter(func));
