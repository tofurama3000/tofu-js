import { curry } from '../fp/curry';

export const firstOr = curry((defaultValue, iterable) => {
  for (const v of iterable) {
    return v;
  }
  return defaultValue;
});
