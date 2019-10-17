import { curry } from './curry';

export const spread = curry((func, args) => func(...args));
