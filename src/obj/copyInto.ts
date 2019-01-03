import { fp } from '../index';

export const copyInto = fp.curry((source: object, target: object) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
});
