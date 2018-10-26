import { firstOr } from './firstOr';

describe('firstOr', () => {
  it('returns first item', () => {
    expect(firstOr(6, [0])).toBe(0);
    expect(firstOr(6, [1])).toBe(1);
  });

  it('returns default item', () => {
    expect(firstOr(6, [])).toBe(6);
    expect(firstOr(4, [])).toBe(4);
  });
});
