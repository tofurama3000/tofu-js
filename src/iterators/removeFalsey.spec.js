import { removeFalsey } from './removeFalsey';
import { collectToArray } from './collectToArray';

describe('Remove Falsey', () => {
  it('removes falsey values', () => {
    expect(collectToArray(removeFalsey(['hi', 0, 1, null, undefined, '', 8]))).toEqual([
      'hi',
      1,
      8
    ]);
  });
});
