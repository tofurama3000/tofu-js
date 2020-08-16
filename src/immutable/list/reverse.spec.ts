import { reverse } from './index';
import { assertEqualLists } from './__test-utils';
import { ListBase } from './__list-sym';

describe('Immutable List reverse', () => {
  it('can reverse lists', () => {
    const list: ListBase<number> = [1, [2, [3, [4, []]]]];
    const reversed: ListBase<number> = [4, [3, [2, [1, []]]]];
    assertEqualLists(reverse(list), reversed);
    expect([...reverse(list)]).toEqual([4, 3, 2, 1]);
  });
});
