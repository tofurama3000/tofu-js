import { toIterableOrEmpty } from './toIterableOrEmpty';

export const fromPairs = function*(pairs) {
  const p = toIterableOrEmpty(pairs);
  let obj = {};
  for (const [key, val] of p) {
    obj = Object.assign(obj, { [key]: val });
  }
  yield obj;
};
