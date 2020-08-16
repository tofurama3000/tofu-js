import { isString } from './isString';

describe('isString', () => {
  it('Detects Strings', () => {
    expect(isString('')).toBe(true);
    expect(isString('str')).toBe(true);
    expect(isString('123')).toBe(true);
  });

  it('Detects non-strings', () => {
    expect(isString(2.5)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(Infinity)).toBe(false);
    expect(isString(-Infinity)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
  });
});
