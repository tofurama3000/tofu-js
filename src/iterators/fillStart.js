import { curry } from '../fp';
import { fill } from "./fill";

export const fillStart = curry(function(end, value, iterable) {
  return fill(0, end, value, iterable)
});