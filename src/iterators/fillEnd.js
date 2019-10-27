import { curry } from '../fp';
import { fill } from './fill';

export const fillEnd = curry(function(start, value, iterable) {
  return fill(start, Infinity, value, iterable);
});
