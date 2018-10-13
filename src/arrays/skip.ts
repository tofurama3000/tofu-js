import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const skip = curry((amt: number = 1, array: any[]) => toArrayOrEmpty(array).splice(amt));
