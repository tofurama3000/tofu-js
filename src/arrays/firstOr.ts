import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp';

export const firstOr = curry<any, any[], any>((defaultValue, array) => {
  const arr = toArrayOrEmpty(array);
  return arr.length ? arr[0] : defaultValue;
});
