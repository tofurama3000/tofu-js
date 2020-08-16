import { keys } from './keys';

describe('keys', () => {
  it('Returns both string and symbol keys', () => {
    const s = Symbol('s');
    const o = {
      hello: 'world',
      [s]: 4,
      12: 32
    };
    expect(keys(o)).toEqual(['12', 'hello', s]);
  });
});
