import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const flatten = curry(array => [].concat(...toArrayOrEmpty(array)));
