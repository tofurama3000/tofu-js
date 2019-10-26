import { toIterableOrEmpty } from './toIterableOrEmpty';
import { filter } from './filter';

export function removeTruthy(iter) {
  return filter(x => !x, toIterableOrEmpty(iter));
}
