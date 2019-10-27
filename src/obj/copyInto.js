import { curry } from '../fp/index';
import { cloneDeep } from '../utils/clone';

export const copyInto = curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
});

export const copyIntoDeep = curry((source, target) => {
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = cloneDeep(source[prop]);
    }
  }
  return target;
});
