import { join } from './join';

describe('join', () => {
  it('works on arrays', () => {
    expect(join(',', [1, 2, 3])).toBe('1,2,3');
    expect(join(' ', [0, 1, 2, 3])).toBe('0 1 2 3');
  });
});
