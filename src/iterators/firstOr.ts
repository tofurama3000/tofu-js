import { curry } from '../fp';

export const firstOr = curry((defaultValue: any, iterable: Iterable<any>) => {
  for (const v of iterable) {
    return v;
  }
  return defaultValue;
});
