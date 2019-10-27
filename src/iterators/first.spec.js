import { first } from './first';

describe('first', () => {
  it('returns just the first element or nothing', () => {
    expect(first([0, 3])).toEqual(0);
    expect(first([])).toEqual(null);
  });
});
