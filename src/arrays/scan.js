import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const scan = curry((func, start, array) => {
  let accumulated = start;
  return toArrayOrEmpty(array).map(elem => {
    accumulated = func(accumulated, elem);
    return accumulated;
  });
});
