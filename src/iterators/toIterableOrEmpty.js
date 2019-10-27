import { isIterable } from '../is/isIterable';

export function toIterableOrEmpty(param) {
  if (!isIterable(param)) return [];
  return param;
}
