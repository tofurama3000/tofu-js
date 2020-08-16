import { fromPairs } from './fromPairs';

describe('fromPairs', () => {
  it('works for arrays', () => {
    expect(fromPairs([])).toEqual({});
    expect(
      fromPairs<number | string>([
        [5, 4],
        ['hello', 'world']
      ])
    ).toEqual({ 5: 4, hello: 'world' });
  });
});
