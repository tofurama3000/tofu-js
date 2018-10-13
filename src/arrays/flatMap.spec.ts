import { flatMap } from './flatMap';
import { lazyRange } from '../utils';
import { collectToArray } from '../iterators';

describe('flatMap', () => {
  it('Can flatten arrays', () => {
    const fm = flatMap((x: any) => collectToArray(lazyRange(x)));
    expect(fm([1, 2, 3])).toEqual([0, 0, 1, 0, 1, 2]);
  });
});
