import * as List from './impl'
import {splitOn} from './splitOn'
import {assertEqualLists} from './__test-utils'

describe('Immutable List splitOn', () => {
  it('can split the list', () => {
    const list = List.toList([1, 2, 3, 4, 5, 6]);
    assertEqualLists(splitOn(list, x => x > 4), [[1, [2, [3, [4, []]]]], [5, [6, []]]]);
  });
})
