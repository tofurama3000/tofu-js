import { reduce } from './reduce';
import { ListBase } from './__list-sym';

describe('Immutable List reduce', () => {
  it('can reduce lists', () => {
    const list: ListBase<number> = [1, [2, [3, [4, [5, []]]]]];
    expect(reduce(list, (a, b) => a + b)).toBe(1 + 2 + 3 + 4 + 5);
    expect(reduce(list, (a, b) => a * b, 1)).toBe(1 * 1 * 2 * 3 * 4 * 5);
  });
});
