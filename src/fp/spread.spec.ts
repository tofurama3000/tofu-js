import { spread } from './spread';

describe('spread', () => {
  it('spreads', () => {
    const f = (...t: number[]) => t.reduce((a, c) => a + c, 0);
    expect(spread(f)([1, 2, 3])).toBe(6);
    expect(spread(f)([1, 2, 3, 4])).toBe(10);
  });
});
