import { limit } from './index';

describe('limit', () => {
  it('works on arrays', () => {
    expect(limit(2, [1, 2, 3, 4])).toEqual([1, 2]);
  });
});
