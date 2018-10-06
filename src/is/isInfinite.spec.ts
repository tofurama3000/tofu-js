import { isInfinite } from './index';

describe('isInfinite', () => {
  it('Works for +Infinity', () => {
    expect(isInfinite(Infinity)).toBe(true);
    expect(isInfinite(+Infinity)).toBe(true);
    expect(isInfinite(Infinity + 1)).toBe(true);
  });

  it('Works for -Infinity', () => {
    expect(isInfinite(-Infinity)).toBe(true);
    expect(isInfinite(-Infinity + 1)).toBe(true);
    expect(isInfinite(+-Infinity)).toBe(true);
    expect(isInfinite(-+Infinity)).toBe(true);
  });

  it('Works for divide by 0', () => {
    expect(isInfinite(10 / 0)).toBe(true);
  });

  it('Detects non-infinity', () => {
    expect(isInfinite(10 / 2)).toBe(false);
    expect(isInfinite('string')).toBe(false);
    expect(isInfinite({})).toBe(false);
    expect(isInfinite([])).toBe(false);
    expect(isInfinite(NaN)).toBe(false);
  });
});
