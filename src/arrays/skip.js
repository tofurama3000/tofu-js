import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const skip = curry((amt, array) => toArrayOrEmpty(array).splice(amt));
