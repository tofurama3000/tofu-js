import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const tap = curry((func: (obj: any) => void, array: any[]) => {
  toArrayOrEmpty(array).forEach(func);
  return array;
});
