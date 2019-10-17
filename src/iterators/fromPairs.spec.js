import { fromPairs } from './fromPairs';
import { firstOrNull } from './firstOrNull';

describe('fromPairs', () => {
  it('works for iterables', () => {
    expect(firstOrNull(fromPairs([]))).toEqual({});
    expect(firstOrNull(fromPairs([[5, 4], ['hello', 'world']]))).toEqual({ 5: 4, hello: 'world' });
  });
});
