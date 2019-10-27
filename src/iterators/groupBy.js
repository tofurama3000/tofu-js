import { curry } from '../fp';
import { toIterableOrEmpty } from './toIterableOrEmpty';

export const groupBy = curry(function(func, iterable) {
  const result = {};
  for (const val of toIterableOrEmpty(iterable)) {
    const key = func(val);
    result[key] = result[key] || [];
    result[key].push(val);
  }
  return result;
});
