import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const reduce = curry<(acc: any, elem: any) => any, any, any[], any>((func, start, array) =>
  toArrayOrEmpty(array).reduce(func, start)
);
