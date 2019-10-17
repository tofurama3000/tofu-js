import { fp } from '../index';
import { cloneDeep } from '../utils';

export const copyInto = fp.curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
});

export const copyIntoDeep = fp.curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = cloneDeep(source[prop]);
    }
  }
  return target;
});
