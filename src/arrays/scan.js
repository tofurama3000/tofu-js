import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const scan = curry((func, start, array) => {
  let accumulated = start;
  return toArrayOrEmpty(array).map(elem => {
    accumulated = func(accumulated, elem);
    return accumulated;
  });
});
