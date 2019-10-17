import { map } from './map';

describe('map', () => {
  it('works on arrays', () => {
    const m = map(x => x + 1);
    expect(m([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
  });
});
