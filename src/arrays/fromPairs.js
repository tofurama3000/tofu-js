import { toArrayOrEmpty } from './toArrayOrEmpty';

export const fromPairs = pairs => {
  return toArrayOrEmpty(pairs)
    .map(([key, val]) => ({ [key]: val }))
    .reduce((a, c) => Object.assign(a, c), {});
};
