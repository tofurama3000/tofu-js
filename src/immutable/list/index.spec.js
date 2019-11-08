import * as List from './index';
import { assertEqualLists } from './__test-utils';

describe('Immutable list implementation', () => {
  it('can convert arrays to lists', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const list = [0, [1, [2, [3, [4, [5, []]]]]]];

    assertEqualLists(List.toList(arr), list);
    assertEqualLists(List.toList([1, [2, 3]]), [1, [[2, 3], []]]);
  });

  it('can recursivley convert nested arrays to lists', () => {
    const arr = [0, [1, 3, 4], 2, 3, 4, 5];
    const list = [0, [[1, [3, [4, []]]], [2, [3, [4, [5, []]]]]]];

    assertEqualLists(List.nestedToList(arr), list);
    assertEqualLists(List.nestedToList(new Map([[1, arr]])), new Map([[1, list]]));
    assertEqualLists(List.nestedToList(new Set([arr])), new Set([list]));
    assertEqualLists(List.nestedToList({ a: arr }), { a: list });
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