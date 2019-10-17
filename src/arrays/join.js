import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp';

export const join = curry((separator, arr) =>
  toArrayOrEmpty(arr).join(separator)
);
