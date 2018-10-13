import { curry } from '../fp';

export const zip = curry((arrLeft: any[], arrRight: any[], ...moreArrays: any[][]) => {
  const arrays = [arrLeft, arrRight, ...moreArrays];
  const maxLen = Math.max(...arrays.map(a => a.length));

  const res: any[] = [];
  for (let i = 0; i < maxLen; ++i) {
    res.push(arrays.map(a => (i < a.length ? a[i] : null)));
  }
  return res;
});
