import { map } from './index';
import { assertEqualLists } from './__test-utils';
import { ListBase } from './__list-sym';

describe('Immutable list map', () => {
  it('can map over a list', () => {
    const list1: ListBase<number> = [1, [2, [3, [4, []]]]];
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
