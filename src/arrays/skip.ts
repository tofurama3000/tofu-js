import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const skip = curry<number, any[], any[]>((amt, array) => toArrayOrEmpty(array).splice(amt));
