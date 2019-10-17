import { scan } from './scan';

describe('scan', () => {
  it('works on arrays', () => {
    const s = scan((a, b) => a + b, 0);
    expect(s([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });
});
