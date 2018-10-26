import { isNumber } from './isNumber';

describe('isNumber', () => {
  it('Detects Numbers', () => {
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.2)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it('Detects non-nums', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('NaN')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
  });
});
