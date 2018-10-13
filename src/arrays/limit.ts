import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const limit = curry((max: number, array: any[]) => toArrayOrEmpty(array).splice(0, max));
