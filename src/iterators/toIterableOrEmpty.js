import { isIterable } from '../is';

export function toIterableOrEmpty(param) {
  if (!isIterable(param)) return [];
  return param;
}
