import { isNil } from './index';

describe('isNil', () => {
  it('can detect null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('can detect undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('returns false for everything else', () => {
    expect(isNil('string')).toBe(false);
    expect(isNil(() => {})).toBe(false);
    expect(isNil(5.34)).toBe(false);
    expect(isNil(Symbol.iterator)).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
  });
});
