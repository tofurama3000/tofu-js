import { reduce } from './reduce';

describe('Immutable List reduce', () => {
  it('can reduce lists', () => {
    const list = [1, [2, [3, [4, [5, []]]]]];
    expect(reduce(list, (a, b) => a + b)).toBe(1 + 2 + 3 + 4 + 5);
    expect(reduce(list, (a, b) => a * b, 1)).toBe(1 * 1 * 2 * 3 * 4 * 5);
  });
});
