import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const chunk = curry((size: number, array: any[]) => {
  const arr = toArrayOrEmpty(array);
  const output: any[][] = [];
  let chnk: any[] = [];
  for (const elem of arr) {
    if (chnk.length >= size) {
      output.push(chnk);
      chnk = [];
    }
    chnk.push(elem);
  }
  if (chnk.length) {
    output.push(chnk);
  }
  return output;
});
