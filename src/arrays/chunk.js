import { curry } from '../fp/curry';
import { toArrayOrEmpty } from './toArrayOrEmpty';

export const chunk = curry((size, array) => {
  const arr = toArrayOrEmpty(array);
  const output = [];
  let chnk = [];
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
