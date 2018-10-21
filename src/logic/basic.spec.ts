import { and, or, xor, negate } from './basic';

describe('Basic logic', () => {
  it('does and', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(and)).toEqual([true, false, false, false, false]);
  });

  it('does or', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(or)).toEqual([true, true, true, false, false]);
  });

  it('does xor', () => {
    const arrs = [[true, true], [true, false], [false, true], [false, false], []];
    expect(arrs.map(xor)).toEqual([false, true, true, false, false]);
  });

  it('does negate', () => {
    const arrs = [[true, false], true, false];
    expect(arrs.map(negate)).toEqual([[false, true], false, true]);
  });
});
