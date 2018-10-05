import { isInfinite } from './index';

describe('isInfinite', () => {
  it('Works for +Infinity', () => {
    expect(isInfinite(Infinity)).toBe(true);
    expect(isInfinite(+Infinity)).toBe(true);
  });

  it('Works for -Infinity', () => {
    expect(isInfinite(-Infinity)).toBe(true);
    expect(isInfinite(+-Infinity)).toBe(true);
    expect(isInfinite(-+Infinity)).toBe(true);
  });

  it('Works for divide by 0', () => {
    expect(isInfinite(10 / 0)).toBe(true);
  });
});
