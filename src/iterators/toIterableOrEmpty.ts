import { isIterable } from '../is';

export function toIterableOrEmpty(param: any) {
  if (!isIterable(param)) return [];
  return param;
}
