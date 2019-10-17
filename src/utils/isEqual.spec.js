import { cloneDeep } from './clone';
import { isEqual } from './isEqual';

describe('isEqual', () => {
  it('works on obj', () => {
    const obj = { a: { foo: 'bar' } };
    const clone = cloneDeep(obj);
    expect(isEqual(obj, clone)).toBe(true);
  });

  it('works on arrays', () => {
    const arr = [{ foo: 'bar' }];
    const clone = cloneDeep(arr);
    expect(isEqual(arr, clone)).toBe(true);
  });
});
