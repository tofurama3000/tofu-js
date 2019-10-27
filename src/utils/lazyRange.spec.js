import { collectToArray } from '../iterators/collectToArray';
import { lazyRange } from './lazyRange';

describe('lazyRange', () => {
  it('generates with just one input', () => {
    expect(collectToArray(lazyRange(5))).toEqual([0, 1, 2, 3, 4]);
  });

  it('generates range from and to', () => {
    expect(collectToArray(lazyRange(1, 5))).toEqual([1, 2, 3, 4]);
  });

  it('generates range from and to by step', () => {
    expect(collectToArray(lazyRange(1, 6, 2))).toEqual([1, 3, 5]);
    expect(collectToArray(lazyRange(1, 7, 2))).toEqual([1, 3, 5]);
    expect(collectToArray(lazyRange(1, 7, -2))).toEqual([1, 3, 5]);
    expect(collectToArray(lazyRange(1, 3, 0))).toEqual([1, 2]);
  });

  it('generates can step in the negative direction', () => {
    expect(collectToArray(lazyRange(-4))).toEqual([0, -1, -2, -3]);
    expect(collectToArray(lazyRange(7, 1, 2))).toEqual([7, 5, 3]);
    expect(collectToArray(lazyRange(7, 1, -2))).toEqual([7, 5, 3]);
  });

  it('returns [] when passed 0', () => {
    expect(collectToArray(lazyRange(0))).toEqual([]);
  });

  it('returns [start] when passed too big of a step', () => {
    expect(collectToArray(lazyRange(1, 5, 10))).toEqual([1]);
  });

  it('returns [start, start+1, start+2, ...] as an infinite sequence', () => {
    expect(collectToArray(lazyRange(1, Infinity, 2), 6)).toEqual([1, 3, 5, 7, 9, 11]);
    expect(collectToArray(lazyRange(1, Infinity), 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns [0, 1, 2, ...] as an infinite sequence', () => {
    expect(collectToArray(lazyRange(), 6)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('returns [start, start-1, start-2, ...] as an infinite sequence', () => {
    expect(collectToArray(lazyRange(10, -Infinity, 2), 6)).toEqual([10, 8, 6, 4, 2, 0]);
    expect(collectToArray(lazyRange(10, -Infinity), 10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it('returns [start, start+1, start-1, start+2, start-2, ...] as an infinite sequence', () => {
    expect(collectToArray(lazyRange(Infinity, -Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
    expect(collectToArray(lazyRange(Infinity, -Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
    expect(collectToArray(lazyRange(Infinity, Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
    expect(collectToArray(lazyRange(Infinity, Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
    expect(collectToArray(lazyRange(-Infinity, Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
    expect(collectToArray(lazyRange(-Infinity, Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
    expect(collectToArray(lazyRange(-Infinity, -Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
    expect(collectToArray(lazyRange(-Infinity, -Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
  });
});
