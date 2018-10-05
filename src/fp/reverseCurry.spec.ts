import { isFunction } from '../is';
import { reverseCurry } from './reverseCurry';

describe('reverseCurry', () => {
  it('returns a function', () => {
    const curryResult = reverseCurry(testFunction);
    expect(isFunction(curryResult)).toBe(true);
  });

  it('returns a function after partial application', () => {
    const curryResult = reverseCurry(testFunction);
    expect(isFunction(curryResult('a', 'b'))).toBe(true);
    expect(isFunction(curryResult('a')('b'))).toBe(true);
    expect(isFunction(curryResult('a'))).toBe(true);
  });

  it('returns a result after full application', () => {
    const curryResult = reverseCurry(testFunction);
    const answer = 'cba';
    expect(curryResult('a', 'b', 'c')).toBe(answer);
    expect(curryResult('a', 'b')('c')).toBe(answer);
  });
});

function testFunction(a: string, b: string, c: string) {
  return a + b + c;
}
