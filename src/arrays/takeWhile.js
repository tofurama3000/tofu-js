import { curry } from '../fp';
import { isIterable } from '../is';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const takeWhile = curry((whileFunc, array) => {
  const arr = toArrayOrEmpty(array);
  const res = [];
  for (const val of arr) {
    if (whileFunc(val)) res.push(val);
    else return res;
  }
  return res;
});
