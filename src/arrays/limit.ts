import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const limit = curry<number, any[], any[]>((max, array) =>
  toArrayOrEmpty(array).splice(0, max)
);
