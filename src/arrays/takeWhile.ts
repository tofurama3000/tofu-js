import { curry } from '../fp';
import { isIterable } from '../is';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const takeWhile = curry(
  (whileFunc: (elem: any) => boolean | Iterable<any>, array: any[]) => {
    const arr = toArrayOrEmpty(array);
    let res: any[] = [];
    for (let i = 0; i < arr.length; ++i) {
      if (whileFunc(arr[i])) res.push(arr[i]);
      else return res;
    }
    return res;
  }
);
