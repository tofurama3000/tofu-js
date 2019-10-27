import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { first } from './first';
import { filter } from './filter';

export const find = curry(function(predicate, iterable) {
  return first(filter(predicate, toIterableOrEmpty(iterable)))
});
