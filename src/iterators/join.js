import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp/curry';
import { collectToArray } from './collectToArray';

export const join = curry(function*(separator, iterable) {
  yield collectToArray(toIterableOrEmpty(iterable)).join(separator);
});
