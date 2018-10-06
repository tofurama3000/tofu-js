import { isInfinite } from '../is';
import { limit } from './limit';
import { isIterableOrEmpty } from './isIterableOrEmpty';

export const collectToArray = (iterable: Iterable<any>, max: number = Infinity) =>
  isInfinite(max)
    ? [...isIterableOrEmpty(iterable)]
    : collectToArray(limit(max, isIterableOrEmpty(iterable)));
