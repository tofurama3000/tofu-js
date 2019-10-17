import { curry, pipe } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';
import { map } from './map';
import { flatten } from './flatten';

export const flatMap = curry((func, array) =>
  pipe(
    toArrayOrEmpty(array),
    map(func),
    flatten
  )
);
