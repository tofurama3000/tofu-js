import { isIterable } from './index';

describe('isIterable', () => {
  it('Detects Iterables', () => {
    expect(
      isIterable(
        (function*() {
          yield 1;
        })()
      )
    ).toBe(true);
    expect(isIterable({ [Symbol.iterator]: () => ({}) })).toBe(true);
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Map())).toBe(true);
  });

  it('Detects non-iterables', () => {
    expect(isIterable(2.5)).toBe(false);
    expect(isIterable('string')).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(NaN)).toBe(false);
    expect(isIterable(Infinity)).toBe(false);
    expect(isIterable(-Infinity)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(false)).toBe(false);
    expect(isIterable({})).toBe(false);
    expect(isIterable(() => ({}))).toBe(false);
    expect(isIterable({ [Symbol.iterator]: {} })).toBe(false);
  });
});
