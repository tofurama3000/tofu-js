import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const tap = curry((func, array) => {
  toArrayOrEmpty(array).forEach(func);
  return array;
});
