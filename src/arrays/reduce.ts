import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const reduce = curry((func: (acc: any, obj: any) => any, start: any, array: any[]) =>
  toArrayOrEmpty(array).reduce(func, start)
);
