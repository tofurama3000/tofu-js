import * as List from './impl';
import { assertEqualLists } from './__test-utils';

describe('Immutable list implementation', () => {
  it('can convert arrays to lists', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const list = [0, [1, [2, [3, [4, [5, []]]]]]];

    assertEqualLists(List.toList(arr), list);
  });

  it('can convert a list to an array', () => {
    const list = [1, [2, [3, [4, [5, []]]]]];
    const array = [1, 2, 3, 4, 5];
    expect(List.toArray(list)).toEqual(array);
  });

  it('has an iterator', () => {
    const list1 = List.toList([1, 2, 3, 4]);
    let nextVal = 1;
    for (const val of list1) {
      expect(val).toBe(nextVal++);
    }
    expect(nextVal).toBe(5);

    nextVal = 2;
    for (const val of list1[1]) {
      expect(val).toBe(nextVal++);
    }
  });
});
