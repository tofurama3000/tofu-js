import { toArrayOrEmpty } from './toArrayOrEmpty';

export const fromPairs = (pairs: Array<[string | number, any]>) => {
  return toArrayOrEmpty<[string | number, any]>(pairs)
    .map(([key, val]) => ({ [key]: val }))
    .reduce((a, c) => Object.assign(a, c), {});
};
