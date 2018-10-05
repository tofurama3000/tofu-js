import { reverseArgs } from './reverseArgs';

describe('reverseArgs', () => {
  it('reverses function arguments', () => {
    const func1 = reverseArgs((a, b) => a + b);
    const func2 = reverseArgs((a, b, c) => a + b + c);

    expect(func1('Hello', 'World')).toBe('WorldHello');
    expect(func2('Hello', 'World', '?!')).toBe('?!WorldHello');
  });
});
