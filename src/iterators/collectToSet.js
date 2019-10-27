import { isInfinite } from '../is';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const collectToSet = (iterable, max = Infinity) =>
  isInfinite(max)
    ? new Set(toIterableOrEmpty(iterable))
    : new Set(limit(max, toIterableOrEmpty(iterable)));
