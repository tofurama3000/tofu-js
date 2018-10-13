import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const scan = curry((func: (acc: any, obj: any) => any, start: any, array: any[]) => {
  let accumulated = start;
  return toArrayOrEmpty(array).map((elem: any) => {
    accumulated = func(accumulated, elem);
    return accumulated;
  });
});
