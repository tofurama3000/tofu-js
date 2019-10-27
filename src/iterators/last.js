import { toIterableOrEmpty } from './toIterableOrEmpty';

export function last(iterable) {
  let lastValue = undefined;
  for (const val of toIterableOrEmpty(iterable)) {
    lastValue = val;
  }
  return lastValue;
}
