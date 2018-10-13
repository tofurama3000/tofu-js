import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const filter = curry((func: (param: any) => boolean, array: any[]) =>
  toArrayOrEmpty(array).filter(func)
);
