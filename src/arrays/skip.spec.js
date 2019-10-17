import { skip } from './skip';

describe('skip', () => {
  it('does skip', () => {
    expect(skip(4, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([5, 6, 7, 8]);
    expect(skip(2, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([3, 4, 5, 6, 7, 8]);
    expect(skip(0, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(skip(-10, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
