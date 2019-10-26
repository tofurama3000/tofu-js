import * as List from './impl';
import { add } from './add';
import { assertEqualLists } from './__test-utils';

describe('Immutable List add', () => {
  it('can add an element', () => {
    const list = List.toList([1, 2, 3, 4]);
    assertEqualLists(add(list, 0), [0, list]);
  });
});
