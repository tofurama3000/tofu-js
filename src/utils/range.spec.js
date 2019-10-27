import { range } from './index';

describe('range', () => {
  it('generates empty array with no inputs', () => {
    expect(range()).toEqual([]);
  });
  it('generates with just one input', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  it('generates range from and to', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it('generates range from and to by step', () => {
    expect(range(1, 6, 2)).toEqual([1, 3, 5]);
    expect(range(1, 7, 2)).toEqual([1, 3, 5]);
    expect(range(1, 7, -2)).toEqual([1, 3, 5]);
    expect(range(1, 3, 0)).toEqual([1, 2]);
  });

  it('generates can step in the negative direction', () => {
    expect(range(-4)).toEqual([0, -1, -2, -3]);
    expect(range(7, 1, 2)).toEqual([7, 5, 3]);
    expect(range(7, 1, -2)).toEqual([7, 5, 3]);
  });

  it('returns [] when passed 0', () => {
    expect(range(0)).toEqual([]);
  });

  it('returns [start] when passed too big of a step', () => {
    expect(range(1, 5, 10)).toEqual([1]);
  });
});
