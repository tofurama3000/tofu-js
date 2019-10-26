import {isEmpty} from './isEmpty'

describe('Immutable List isEmpty', () => {

  it('has empty being detected', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, []])).toBe(false);
  });
})