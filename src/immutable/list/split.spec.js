import * as List from './impl';
import { split } from './split';
import { assertEqualLists } from './__test-utils';

describe('Immutable list split', () => {
  it('can split the list', () => {
    const list = List.toList([1, 2, 3, 4, 5, 6]);
    assertEqualLists(split(list, 3), [[1, [2, [3, []]]], [4, [5, [6, []]]]]);
  });
});