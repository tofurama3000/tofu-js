import { isNil } from '../is';

export const range = (start: number = 0, end?: number, step: number = 1) => {
  if (isNil(end)) return range(0, start, step);
  const arr: number[] = [];
  const to = +(end || 0);
  const from = +start;
  const stepAmt = Math.abs(step || 1);
  if (from < to) {
    for (let i = from; i < to; i += stepAmt) arr.push(i);
  } else {
    for (let i = from; i > to; i -= stepAmt) arr.push(i);
  }
  return arr;
};
