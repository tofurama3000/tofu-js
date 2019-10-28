import { collectToArray } from './collectToArray';
import { fill } from './fill';
import { fillStart } from './fillStart';
import { fillEnd } from './fillEnd';
import { fillAll } from './fillAll';

describe('Iterable fill', () => {
  it('fills an iterable', () => {
    expect(collectToArray(fill(0, 3, '2', [1, 2, 3, 4, 5]))).toEqual(['2', '2', '2', 4, 5]);
    expect(collectToArray(fill(1, 4, '2', [1, 2, 3, 4, 5]))).toEqual([1, '2', '2', '2', 5]);
    expect(collectToArray(fill(3, 10, '2', [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, '2', '2']);
  });
});

describe('Iterable fillStart', () => {
  it('fills an iterable', () => {
    expect(collectToArray(fillStart(3, '2', [1, 2, 3, 4, 5]))).toEqual(['2', '2', '2', 4, 5]);
    expect(collectToArray(fillStart(4, '2', [1, 2, 3, 4, 5]))).toEqual(['2', '2', '2', '2', 5]);
    expect(collectToArray(fillStart(10, '2', [1, 2, 3, 4, 5]))).toEqual(['2', '2', '2', '2', '2']);
  });
});

describe('Iterable fillEnd', () => {
  it('fills an iterable', () => {
    expect(collectToArray(fillEnd(3, '2', [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, '2', '2']);
    expect(collectToArray(fillEnd(4, '2', [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, 4, '2']);
    expect(collectToArray(fillEnd(10, '2', [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('Iterable fillAll', () => {
  it('fills an iterable', () => {
    expect(collectToArray(fillAll('2', [1, 2, 3, 4, 5]))).toEqual(['2', '2', '2', '2', '2']);
    expect(collectToArray(fillAll('3', [3, 4, 5]))).toEqual(['3', '3', '3']);
    expect(collectToArray(fillAll('2', [1, 2, 3, 4, 5, 6, 7]))).toEqual([
      '2',
      '2',
      '2',
      '2',
      '2',
      '2',
      '2'
    ]);
  });
});
