import { curry } from './curry';

export const spread = curry<(...args: any[]) => any, any[], any>((func, args) => func(...args));
