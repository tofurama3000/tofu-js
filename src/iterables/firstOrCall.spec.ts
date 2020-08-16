import { firstOrCall } from './firstOrCall';

describe('firstOrCall', () => {
  it('returns first item', () => {
    expect(firstOrCall(() => 6, [0])).toBe(0);
    expect(firstOrCall(() => 6, [1])).toBe(1);
  });

  it('returns default item', () => {
    expect(firstOrCall(() => 6, [])).toBe(6);
    expect(firstOrCall(() => 4, [])).toBe(4);
  });
});
