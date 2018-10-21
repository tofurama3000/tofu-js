import { curry } from '../fp';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const chunk = curry((size: number, array: any[]) => {
  const arr = toArrayOrEmpty(array);
  const output: any[][] = [];
  let chunk: any[] = [];
  for (let elem of arr) {
    if (chunk.length >= size) {
      output.push(chunk);
      chunk = [];
    }
    chunk.push(elem);
  }
  if (chunk.length) {
    output.push(chunk);
  }
  return output;
});
