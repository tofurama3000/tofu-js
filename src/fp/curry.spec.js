import { curry } from './index';
import { isFunction } from '../is';

describe('curry', () => {
  it('returns a function', () => {
    const curryResult = curry(testFunction);
    expect(isFunction(curryResult)).toBe(true);
  });

  it('returns a function after partial application', () => {
    const curryResult = curry(testFunction);
    expect(isFunction(curryResult(3, 4))).toBe(true);
    expect(isFunction(curryResult(3)(4))).toBe(true);
    expect(isFunction(curryResult(3))).toBe(true);
  });

  it('returns a result after full application', () => {
    const curryResult = curry(testFunction);
    const answer = 3 + 4 + 5;
    expect(curryResult(3, 4, 5)).toBe(answer);
    expect(curryResult(3, 4)(5)).toBe(answer);
  });

  it('can pass additional parameters', () => {
    const curryResult = curry(testFunction);
    const answer = 3 + 4 + 5 + 6 + 7;
    expect(curryResult(3, 4, 5, 6, 7)).toBe(answer);
  });
});

function testFunction(x, y, z, ...a) {
  return x + y + z + a.reduce((b, c) => b + c, 0);
}
