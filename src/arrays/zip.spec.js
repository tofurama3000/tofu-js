import { zip } from './zip';

describe('zip', () => {
  it('works with two arrays', () => {
    expect(zip([1, 2, 3, 4], [1, -1, 3])).toEqual([
      [1, 1],
      [2, -1],
      [3, 3],
      [4, null]
    ]);
  });

  it('works with many arrays', () => {
    expect(zip([1, 2, 3, 4], [1, -1, 3], [0, 10, null, 3])).toEqual([
      [1, 1, 0],
      [2, -1, 10],
      [3, 3, null],
      [4, null, 3]
    ]);
  });
});
