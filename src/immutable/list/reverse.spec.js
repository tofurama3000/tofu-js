import {reverse} from './reverse'
import {assertEqualLists} from './__test-utils'

describe('Immutable List reverse', () => {
  it('can reverse lists', () => {
    const list = [1, [2, [3, [4, []]]]];
    const reversed = [4, [3, [2, [1, []]]]];
    assertEqualLists(reverse(list), reversed);
    expect([...reverse(list)]).toEqual([4, 3, 2, 1]);
  });
})