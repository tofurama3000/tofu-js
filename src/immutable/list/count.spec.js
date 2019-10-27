import { count } from './count';
import * as List from './index';

describe('Immutable list count', () => {
  it('can count the list length', () => {
    expect(count(List.toList([1, 2, 3, 4, 5]))).toBe(5);
    expect(count(List.toList([1, 2, 3]))).toBe(3);
  });
});
