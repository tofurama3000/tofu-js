import { curry } from '../fp';

export const scan = curry(function*(
  func: (acc: any, obj: any) => any,
  start: any,
  iterable: Iterable<any>
) {
  let accumulated = start;
  for (let val of iterable) {
    accumulated = func(accumulated, val);
    yield accumulated;
  }
});
