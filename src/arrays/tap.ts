import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const tap = curry<(elem: any) => void, any[], any[]>((func, array) => {
  toArrayOrEmpty(array).forEach(func);
  return array;
});
