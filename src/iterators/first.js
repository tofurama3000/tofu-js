import { toIterableOrEmpty } from "./toIterableOrEmpty";

export const first = function(iterable) {
  for(const val of toIterableOrEmpty(iterable)) {
    return val;
  }
  return null;
};
