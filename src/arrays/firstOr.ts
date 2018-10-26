import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp';

export const firstOr = curry((defaultValue: any, array: any[]) => {
  const arr = toArrayOrEmpty(array);
  return arr.length ? arr[0] : defaultValue;
});
