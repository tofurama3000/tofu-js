import { curry } from '../fp';

export const firstOr = curry((defaultValue, iterable) => {
  for (const v of iterable) {
    return v;
  }
  return defaultValue;
});
