import { curry, pipe } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';
import { map } from './map';
import { flatten } from './flatten';

export const flatMap = curry((func: (param: any) => any, array: any[]) =>
  pipe(
    toArrayOrEmpty(array),
    map(func),
    flatten
  )
);
