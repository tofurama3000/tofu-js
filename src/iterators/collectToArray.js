import { isInfinite } from '../is';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const collectToArray = (iterable, max= Infinity) =>
  isInfinite(max)
    ? [...toIterableOrEmpty(iterable)]
    : collectToArray(limit(max, toIterableOrEmpty(iterable)));
