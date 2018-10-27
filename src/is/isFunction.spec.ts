import { isFunction } from './index';

class TestClass {}

describe('isFunction', () => {
  it('can detect function declarations', () => {
    function testFunc() {}
    expect(isFunction(testFunc)).toBe(true);
  });

  it('can detect function expressions', () => {
    const testFunc = function() {};
    expect(isFunction(testFunc)).toBe(true);
  });

  it('can detect arrow functions', () => {
    const testFunc = () => ({});
    expect(isFunction(testFunc)).toBe(true);
  });

  it('can detect async functions', () => {
    const testFunc = async () => await Promise.resolve(4);
    expect(isFunction(testFunc)).toBe(true);
  });

  it('can detect generator functions', () => {
    const testFunc = function*() {
      yield 4;
    };
    expect(isFunction(testFunc)).toBe(true);
  });

  it('can detect constructors', () => {
    expect(isFunction(Proxy)).toBe(true);
    expect(isFunction(Number)).toBe(true);
    expect(isFunction(String)).toBe(true);
    expect(isFunction(TestClass)).toBe(true);
  });

  it('returns false for null', () => {
    expect(isFunction(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it('returns false for primitives and objects', () => {
    expect(isFunction('string')).toBe(false);
    expect(isFunction(5.34)).toBe(false);
    expect(isFunction(Symbol.iterator)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
  });
});
