import { isInfinite } from '../is';
import { limit } from './limit';

export const collectToArray = (iterable: Iterable<any>, max: number = Infinity) =>
  isInfinite(max) ? [...iterable] : collectToArray(limit(max, iterable));
