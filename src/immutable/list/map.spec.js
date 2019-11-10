import { map } from './index';
import { assertEqualLists } from './__test-utils';

describe('Immutable list map', () => {
  it('can map over a list', () => {
    const list1 = [1, [2, [3, [4, []]]]];
    assertEqualLists(
      map(list1, x => x % 2),
      [1, [0, [1, [0, []]]]]
    );
    assertEqualLists(
      map(list1, x => x + 1),
      [2, [3, [4, [5, []]]]]
    );
  });
});
