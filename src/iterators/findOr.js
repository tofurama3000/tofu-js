import { curry } from '../fp/curry';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { filter } from './filter';
import { firstOr } from './firstOr';

export const findOr = curry(function(defaultValue, predicate, iterable) {
  return firstOr(defaultValue, filter(predicate, toIterableOrEmpty(iterable)));
});
