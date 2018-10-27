import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const scan = curry<(acc: any, elem: any) => any, any, any[], any[]>((func, start, array) => {
  let accumulated = start;
  return toArrayOrEmpty(array).map((elem: any) => {
    accumulated = func(accumulated, elem);
    return accumulated;
  });
});
