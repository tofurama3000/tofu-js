import { isUndefined } from './index';

describe('isUndefined', () => {
  it('can detect undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('returns false for everything else', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined('string')).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(5.34)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(Symbol.iterator)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });
});
