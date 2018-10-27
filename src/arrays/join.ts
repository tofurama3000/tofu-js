import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp';

export const join = curry<string, any[], string>((separator, arr) =>
  toArrayOrEmpty(arr).join(separator)
);
