import { pipe } from './pipe';
import { isFunction } from '../is/isFunction';

describe('pipe', () => {
  it('will return a function with only function args', () => {
    expect(
      isFunction(
        pipe(
          add1,
          prefixHello
        )
      )
    ).toBe(true);
  });

  it('will return a result with first param not a function', () => {
    expect(
      pipe(
        2,
        add1,
        prefixHello
      )
    ).toBe('Hello 3');
  });

  it('will pipe functions', () => {
    expect(
      pipe(
        add1,
        prefixHello
      )(1)
    ).toBe('Hello 2');
  });
});

function add1(x) {
  return x + 1;
}
function prefixHello(x) {
  return 'Hello ' + x;
}
