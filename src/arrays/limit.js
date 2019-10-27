import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const limit = curry((max, array) => toArrayOrEmpty(array).splice(0, max));
