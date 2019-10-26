import * as List from './impl'
import {drop, dropFirst} from './drop'
import {assertEqualLists} from './__test-utils'

describe('Immutable list drop', () => {
  it('can drop the first element', () => {
    const list = List.toList([1, 2, 3, 4, 5]);
    assertEqualLists(dropFirst(list), list[1]);
  });

  it('can remove elements', () => {
    const list = List.toList([1, 2, 3, 4, 5]);
    assertEqualLists(drop(list, 3), [4, [5, []]]);
    assertEqualLists(drop(list, 2), [3, [4, [5, []]]]);
  });
})
