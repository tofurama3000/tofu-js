import { curry } from './curry';

export const spread = curry((func: (...args: any[]) => any, args: any[]) => func(...args));
