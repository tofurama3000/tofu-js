import { collectToArray } from './collectToArray';
import { takeWhile, takeWhilePushPull } from './takeWhile';

describe('takeWhile', () => {
  it('will take while a function returns true', () => {
    const fn = (() => {
      let i = 0;
      return () => {
        if (i++ < 3) return true;
        return false;
      };
    })();

    expect(collectToArray(takeWhile(fn, [1, 2, 3, 4, 5]))).toEqual([1, 2, 3]);
  });

  it('will take while an iterable is truthy', () => {
    expect(collectToArray(takeWhile([true, true, false], [1, 2, 3, 4, 5]))).toEqual([1, 2]);
  });

  it('will take while an iterable is not done', () => {
    expect(collectToArray(takeWhile([true, true, true], [1, 2, 3, 4, 5]))).toEqual([1, 2, 3]);
  });

  it('will take while a generator is truthy with input', () => {
    const gen = function*() {
      yield* [true, true, true, true, false];
    };
    expect(collectToArray(takeWhile(gen(), [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, 4]);
  });
});

describe('takeWhilePushPull', () => {
  it('will work with a generator that takes input then yields output', () => {
    const gen = function*() {
      while (true) {
        yield (yield 3) - 3;
      }
    };
    expect(collectToArray(takeWhilePushPull(gen(), [1, 2, 3, 4, 5]))).toEqual([1, 2]);
  });
});
