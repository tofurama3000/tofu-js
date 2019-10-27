import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const tap = curry((func, array) => {
  toArrayOrEmpty(array).forEach(func);
  return array;
});
