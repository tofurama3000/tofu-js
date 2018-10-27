import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const map = curry<(elem: any) => any, any[], any[]>((func, array) =>
  toArrayOrEmpty(array).map(func)
);
