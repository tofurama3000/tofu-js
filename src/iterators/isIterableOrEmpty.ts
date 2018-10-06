import { isIterable } from '../is';

export function isIterableOrEmpty(param: any) {
  if (!isIterable(param)) return [];
  return param;
}
