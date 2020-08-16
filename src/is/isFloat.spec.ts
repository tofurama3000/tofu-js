import { isFloat } from './isFloat';

describe('isFloat', () => {
  it('Detects Floats', () => {
    expect(isFloat(1)).toBe(true);
    expect(isFloat(1.2)).toBe(true);
    expect(isFloat(Infinity)).toBe(true);
    expect(isFloat(-Infinity)).toBe(true);
    expect(isFloat(NaN)).toBe(true);
  });

  it('Detects non-floats', () => {
    expect(isFloat({})).toBe(false);
    expect(isFloat(null)).toBe(false);
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat('NaN')).toBe(false);
    expect(isFloat(true)).toBe(false);
    expect(isFloat(false)).toBe(false);
  });
});
