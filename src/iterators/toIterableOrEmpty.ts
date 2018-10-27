import { isIterable } from '../is';

export function toIterableOrEmpty<T1 = any>(param: T1): Iterable<T1> {
  if (!isIterable(param)) return [];
  return param;
}
