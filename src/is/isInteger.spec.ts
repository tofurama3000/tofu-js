import { isInteger } from './isInteger';

describe('isInteger', () => {
  it('Detects Integers', () => {
    expect(isInteger(1)).toBe(true);
  });

  it('Detects non-ints', () => {
    expect(isInteger(2.5)).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger('NaN')).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);

    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(1.2)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });
});
