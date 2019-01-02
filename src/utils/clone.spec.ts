import { cloneShallow, cloneDeep } from './clone';

describe('cloneShallow', () => {
  it('works on obj', () => {
    const obj = { a: { foo: 'bar' } };
    const clone: any = cloneShallow(obj);
    clone.b = 'foobar';
    clone.a.foo = 'fizzbuzz';
    expect((obj as any).b).toBeUndefined();
    expect(obj.a.foo).toBe('fizzbuzz');
    expect(clone.b).toEqual('foobar');
  });

  it('works on arrays', () => {
    const arr = [{ foo: 'bar' }];
    const clone: any = cloneShallow(arr);
    clone.push('foobar');
    clone[0].foo = 'fizzbuzz';
    expect(arr.length).toBe(1);
    expect(arr[0].foo).toBe('fizzbuzz');
    expect(clone[1]).toEqual('foobar');
  });
});

describe('cloneDeep', () => {
  it('works on obj', () => {
    const obj = { a: { foo: 'bar' } };
    const clone: any = cloneDeep(obj);
    clone.b = 'foobar';
    clone.a.foo = 'fizzbuzz';
    expect((obj as any).b).toBeUndefined();
    expect(obj.a.foo).toBe('bar');
    expect(clone.b).toEqual('foobar');
    expect(clone.a.foo).toBe('fizzbuzz');
  });

  it('works on arrays', () => {
    const arr = [{ foo: 'bar' }];
    const clone: any = cloneDeep(arr);
    clone.push('foobar');
    clone[0].foo = 'fizzbuzz';
    expect(arr.length).toBe(1);
    expect(arr[0].foo).toBe('bar');
    expect(clone[0].foo).toBe('fizzbuzz');
    expect(clone[1]).toEqual('foobar');
  });
});
