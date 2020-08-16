import { reduce } from './reduce';

describe('reduce', () => {
  it('works on arrays', () => {
    const r = reduce((a, b) => a + b, 0);
    expect(r([1, 2, 3, 4])).toEqual(10);
  });
});
