import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const skip = curry((amt, array) => toArrayOrEmpty(array).splice(amt));
