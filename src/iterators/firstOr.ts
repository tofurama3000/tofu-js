import { curry } from '../fp';

export const firstOr = curry((defaultValue: any, iterable: Iterable<any>) => {
  for (let v of iterable) {
    return v;
  }
  return defaultValue;
});
