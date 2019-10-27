import { curry } from '../fp/curry';
import {pipe} from '../fp/pipe';
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
