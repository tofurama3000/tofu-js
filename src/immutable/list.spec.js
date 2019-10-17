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

  it('has an iterator', () => {
    const list1 = List.toList([1, 2, 3, 4]);
    let nextVal = 1;
    for(const val of list1) {
      expect(val).toBe(nextVal++);
    }
    expect(nextVal).toBe(5);

    nextVal = 2;
    for(const val of list1[1]) {
      expect(val).toBe(nextVal++);
    }
  });

  it('can add an element', () => {
    const list = List.toList([1, 2, 3, 4]);
    assertEqualLists(List.add(list, 0), [0, list]);
  });

  it('can remove elements', () => {
    const list = List.toList([1, 2, 3, 4, 5]);
    assertEqualLists(List.drop(list, 3), [4, [5, []]]);
    assertEqualLists(List.drop(list, 2), [3, [4, [5, []]]]);
  });

  it('can drop the first element', () => {
    const list = List.toList([1, 2, 3, 4, 5]);
    assertEqualLists(List.dropFirst(list), list[1]);
  })
});

function assertEqualLists(l1, l2) {
  expect(JSON.stringify(l1)).toBe(JSON.stringify(l2));
}

