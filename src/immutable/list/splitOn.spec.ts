import * as List from './index';
import { splitOn } from './index';
import { assertEqualLists } from './__test-utils';
import { toPredicate } from '../../fp';

describe('Immutable List splitOn', () => {
  it('can split the list', () => {
    const list = List.toList([1, 2, 3, 4, 5, 6]);
    assertEqualLists(
      splitOn(list, x => x > 4),
      [
        [1, [2, [3, [4, []]]]],
        [5, [6, []]]
      ]
    );
    assertEqualLists(
      splitOn([], x => x < 4),
      [[], []]
    );
    assertEqualLists(
      splitOn(
        null,
        toPredicate(x => x)
      ),
      [[], []]
    );
  });
});
