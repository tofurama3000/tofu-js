import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const map = curry((func: (obj: any) => any, array: any[]) =>
  toArrayOrEmpty(array).map(func)
);
