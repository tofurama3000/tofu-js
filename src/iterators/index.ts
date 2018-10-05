import { isInfinite } from '../is';

export const collectToArray = (iter: Iterable<any>, max: number = Infinity) => {
  if (isInfinite(max)) return [...iter];
  const arr: any = [];
  let count = 0;
  for (let val of iter) {
    if (count++ < +max) {
      arr.push(val);
    } else {
      break;
    }
  }
  return arr;
};
