import { curry } from '../fp/curry';
import { limit } from './limit';
import { skip } from './skip';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToArray } from './collectToArray';

export const split = curry(function(
  n: number,
  iterable: Iterable<any>
): [Iterable<any>, Iterable<any>] {
  const iter = collectToArray(toIterableOrEmpty(iterable));
  const left = limit(n, iter);
  const right = skip(n, iter);
  return [left, right];
});
