import * as List from './impl'
import {concat} from './concat'
import {assertEqualLists} from './__test-utils'

describe('Immutable List concat', () => {
  it('keeps functions', () => {
    const list1 = List.toList([1, 2, 3])
    const list2 = List.toList([4, 5, 6])
    const concatenated = concat(list1, list2)
    assertEqualLists(concatenated.map(x => x + 1), List.toList([2, 3, 4, 5, 6, 7]))
    expect([...concatenated]).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('can concatenate lists', () => {
    const list1 = [1, [2, [3, []]]];
    const list2 = [4, [5, [6, []]]];
    const concatenated = [1, [2, [3, list2]]];
    assertEqualLists(concat(list1, list2), concatenated);
  });

})
