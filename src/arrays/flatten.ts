import { curry } from '../fp';
import { toIterableOrEmpty } from '../iterators/toIterableOrEmpty';

export const flatten = curry((array: any[]) => [].concat(...toIterableOrEmpty(array)));
