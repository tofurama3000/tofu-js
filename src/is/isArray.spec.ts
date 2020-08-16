import { isArray } from './isArray';

describe('isArray', () => {
  it('Detects Floats', () => {
    expect(isArray(Array(5))).toBe(true);
    expect(isArray(Array())).toBe(true);
    expect(isArray([])).toBe(true);
    expect(isArray([5])).toBe(true);
  });

  it('Detects non-floats', () => {
    expect(isArray(1)).toBe(false);
    expect(isArray(1.2)).toBe(false);
    expect(isArray(Infinity)).toBe(false);
    expect(isArray(-Infinity)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray('NaN')).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
  });
});
