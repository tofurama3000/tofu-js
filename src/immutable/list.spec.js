import * as List from './list'

describe('Immutable list', () => {
  it('can convert arrays to lists', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const list = [0, [1, [2, [3, [4, [5, []]]]]]];

    assertEqualLists(List.toList(arr), list);
  });

  it('can nested convert arrays to lists', () => {
    const arr = [1, [2, 3], {a: [4, 5]}];
    const list = [1, [[2, [3, []]], [{a: [4, [5, []]]}, []]]];

    assertEqualLists(List.nestedToList(arr), list);
  });

  it('can reverse lists', () => {
    const list = [1, [2, [3, [4, []]]]];
    const reversed = [4, [3, [2, [1, []]]]];
    assertEqualLists(List.reverse(list), reversed);
  });

  it('can concatenate lists', () => {
    const list1 = [1, [2, [3, []]]];
    const list2 = [4, [5, [6, []]]];
    const concatenated = [1, [2, [3, list2]]];
    assertEqualLists(List.concat(list1, list2), concatenated);
  });

  it('can convert a list to an array', () => {
    const list = [1, [2, [3, [4, [5, []]]]]];
    const array = [1, 2, 3, 4, 5];
    expect(List.toArray(list)).toEqual(array);
  });

  it('has correct list functions', () => {
    const list1 = List.toList([1, 2, 3, 4]);
    const list2 = List.toList([4, 5, 6]);
    assertEqualLists(list1.concat(list2), List.concat(list1, list2));
    assertEqualLists(list2.reverse(), [6, [5, [4, []]]]);
    assertEqualLists(list1.add(10), [10, list1]);
    assertEqualLists(list1.removeFirst(), list1[1]);
    assertEqualLists(list1.removeFirst().add(1), list1);
    expect(list1.toArray()).toEqual([1, 2, 3, 4]);
  });
});

function assertEqualLists(l1, l2) {
  expect(JSON.stringify(l1)).toBe(JSON.stringify(l2));
}

