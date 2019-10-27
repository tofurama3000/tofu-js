import { toArrayOrEmpty } from './toArrayOrEmpty';
import { curry } from '../fp/curry';

export const join = curry((separator, arr) => toArrayOrEmpty(arr).join(separator));
