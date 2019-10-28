import { collectToArray } from "./collectToArray";
import { concat } from "./concat";

describe('Iterable concat', () => {
  it('Can concatenate iterables', () => {
    expect(collectToArray(concat([1, 2, 3], [4, 5 ,6]))).toEqual([1, 2, 3, 4, 5 ,6])
    expect(collectToArray(concat([1, 2], [], [3], [4, 5 ,6]))).toEqual([1, 2, 3, 4, 5 ,6])
  });
});
