import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp/curry';

export const firstOr = curry((defaultValue, array) => {
  const arr = toArrayOrEmpty(array);
  return arr.length ? arr[0] : defaultValue;
});
