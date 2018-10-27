import { curry } from '../fp';
import { isIterable } from '../is';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const takeWhile = curry<(elem: any) => boolean | Iterable<any>, any[], any[]>(
  (whileFunc, array) => {
    const arr = toArrayOrEmpty(array);
    const res: any[] = [];
    for (const val of arr) {
      if (whileFunc(val)) res.push(val);
      else return res;
    }
    return res;
  }
);
