import { removeTruthy } from './removeTruthy';
import { collectToArray } from './collectToArray';

describe('Remove Truthy', () => {
  it('removes Truthy values', () => {
    expect(collectToArray(removeTruthy(['hi', 0, 1, null, undefined, '', 8]))).toEqual([
      0,
      null,
      undefined,
      ''
    ]);
  });
});
