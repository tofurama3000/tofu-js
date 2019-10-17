import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const map = curry((func, array) =>
  toArrayOrEmpty(array).map(func)
);
