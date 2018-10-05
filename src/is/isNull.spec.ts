import { isNull } from './index';

describe('isNull', () => {
  it('can detect null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('returns false for everything else', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull('string')).toBe(false);
    expect(isNull(() => {})).toBe(false);
    expect(isNull(5.34)).toBe(false);
    expect(isNull(Symbol.iterator)).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
  });
});
