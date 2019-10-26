import { collectToList } from './collectToList';
import {assertEqualLists} from '../immutable/list/__test-utils'

describe('collectToList', () => {
  it('Collects iterators to a list with no limit', () => {
    const arr = [1, 2, 3, 4, 5];
    assertEqualLists(collectToList(arr), [1, [2, [3, [4, [5, []]]]]])
    assertEqualLists(
      collectToList(
        (function*() {
          yield 1;
          yield 2;
          yield 3;
        })()
      ),
      [1, [2, [3, []]]]
    );
  });

  it('Collects iterators to a list with a limit', () => {
    assertEqualLists(collectToList([1, 2, 3, 4, 5], 3), [1, [2, [3, []]]]);
    assertEqualLists(
      collectToList(
        (function*() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        2
      )
    [1, [2, []]]);
  });
});
