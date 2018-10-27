import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const flatten = curry<any[], any[]>(array => [].concat(...toArrayOrEmpty(array)));
