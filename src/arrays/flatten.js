import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const flatten = curry(array => [].concat(...toArrayOrEmpty(array)));
