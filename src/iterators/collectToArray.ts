import { isInfinite } from '../is';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const collectToArray = (iterable: Iterable<any>, max: number = Infinity) =>
  isInfinite(max)
    ? [...toIterableOrEmpty(iterable)]
    : collectToArray(limit(max, toIterableOrEmpty(iterable)));
