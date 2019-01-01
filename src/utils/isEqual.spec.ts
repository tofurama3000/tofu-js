import { cloneDeep } from './clone';
import { isEqual } from './isEqual';

describe('isEqual', () => {
  it('works on objects', () => {
    const obj = { a: { foo: 'bar' } };
    const clone: any = cloneDeep(obj);
    expect(isEqual(obj, clone)).toBe(true);
  });

  it('works on arrays', () => {
    const arr = [{ foo: 'bar' }];
    const clone: any = cloneDeep(arr);
    expect(isEqual(arr, clone)).toBe(true);
  });
});
