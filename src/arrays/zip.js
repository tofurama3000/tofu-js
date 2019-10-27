import { curry } from '../fp/curry';

export const zip = curry((arrLeft, arrRight, ...moreArrays) => {
  const arrays = [arrLeft, arrRight, ...moreArrays];
  const maxLen = Math.max(...arrays.map(a => a.length));

  const res = [];
  for (let i = 0; i < maxLen; ++i) {
    res.push(arrays.map(a => (i < a.length ? a[i] : null)));
  }
  return res;
});
