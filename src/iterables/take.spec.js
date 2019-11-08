import { collectToArray } from './collectToArray';
import { take } from './take';

describe('take', () => {
  it('takes only the first n', () => {
    const t3 = take(3);
    const t4 = take(4);
    const arr = [0, 1, 2, 3, 4, 5];
    const gen = function*() {
      yield* arr;
    };
    expect(collectToArray(t3(arr))).toEqual(arr.slice(0, 3));
    expect(collectToArray(t4(arr))).toEqual(arr.slice(0, 4));

    expect(collectToArray(t3(gen()))).toEqual(arr.slice(0, 3));
    expect(collectToArray(t4(gen()))).toEqual(arr.slice(0, 4));
  });
});
