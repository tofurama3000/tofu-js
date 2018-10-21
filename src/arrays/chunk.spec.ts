import { chunk } from './chunk';

describe('chunk', () => {
  it('can chunk arrays', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chunk(3, arr1)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(chunk(2, arr1)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('is empty for non-arrays', () => {
    expect(chunk(2, 5 as any)).toEqual([]);
  });
});
