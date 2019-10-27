import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const forEach = curry(function(func, iterable) {
  for (const val of toIterableOrEmpty(iterable)) {
    func(val);
  }
});
