import { isObject } from './index';

describe('isObject', () => {
  it('Detects Objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ hello: 'world' })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(() => ({}))).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
    expect(isObject(Object.prototype)).toBe(true);
    expect(isObject(new C())).toBe(true);
    expect(isObject(C)).toBe(true);
    expect(isObject(Math)).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(Array.prototype)).toBe(true);
    expect(isObject(Object.create(Object.create(null)))).toBe(true);
  });

  it('Detects non-objects', () => {
    expect(isObject(2.5)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(Infinity)).toBe(false);
    expect(isObject(-Infinity)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });
});

// tslint:disable-next-line
function C() {}
