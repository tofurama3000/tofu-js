import { toIterableOrEmpty } from './toIterableOrEmpty';

export const fromPairs = function*(pairs: Iterable<[string | number, any]>) {
  const p = toIterableOrEmpty(pairs);
  let obj = {};
  for (let [key, val] of p) {
    obj = Object.assign(obj, { [key]: val });
  }
  yield obj;
};
