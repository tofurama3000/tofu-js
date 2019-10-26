import { toIterableOrEmpty } from './toIterableOrEmpty';
import { filter } from './filter';

export function removeFalsey(iter) {
  return filter(x => x, toIterableOrEmpty(iter));
}
