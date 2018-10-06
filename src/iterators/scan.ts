import { curry } from '../fp';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const scan = curry(function*(
  func: (acc: any, obj: any) => any,
  start: any,
  iterable: Iterable<any>
) {
  const iter = isIterableOrEmpty(iterable);
  let accumulated = start;
  for (let val of iter) {
    accumulated = func(accumulated, val);
    yield accumulated;
  }
});
