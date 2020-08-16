import { and, or, xor, negate, negateAll } from './basic';
import { spread } from '../fp/spread';

describe('Basic logic', () => {
  it('does and', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(spread(and))).toEqual([true, false, false, false, false]);
  });

  it('does or', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(spread(or))).toEqual([true, true, true, false, false]);
  });

  it('does xor', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(spread(xor))).toEqual([false, true, true, false, false]);
  });

  it('does negate', () => {
    const arrs = [true, false];
    expect(arrs.map(negate)).toEqual([false, true]);
  });

  it('does negate all', () => {
    const arrs = [[true, false], [true], [false]];
    expect(arrs.map(spread(negateAll))).toEqual([[false, true], [false], [true]]);
  });
});
