import { tap } from './tap';

describe('tap', () => {
  it('works on arrays', () => {
    const arr = [];
    const t = tap(v => arr.push(v));
    t([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
