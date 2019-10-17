import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const limit = curry((max, array) =>
  toArrayOrEmpty(array).splice(0, max)
);
