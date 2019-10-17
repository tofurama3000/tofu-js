import { join } from './join';
import { firstOrNull } from './firstOrNull';

describe('join', () => {
  it('works on arrays', () => {
    expect(firstOrNull(join(',', [1, 2, 3]))).toBe('1,2,3');
    expect(firstOrNull(join(' ', [0, 1, 2, 3]))).toBe('0 1 2 3');
  });

  it('works on generators', () => {
    const gen = function*() {
      yield* [1, 3, 5];
    };
    expect(firstOrNull(join(',', gen()))).toBe('1,3,5');
  });
});
