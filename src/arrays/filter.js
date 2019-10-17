import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const filter = curry((func, array) => toArrayOrEmpty(array).filter(func));
