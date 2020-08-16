import { cloneShallow, cloneDeep } from './clone';
import { isEqual } from '../is/isEqual';

describe('cloneShallow', () => {
  it('works on obj', () => {
    const obj: any = { a: { foo: 'bar' } };
    const clone = cloneShallow(obj);
    clone.b = 'foobar';
    clone.a.foo = 'fizzbuzz';
    expect(obj.b).toBeUndefined();
    expect(obj.a.foo).toBe('fizzbuzz');
    expect(clone.b).toEqual('foobar');
  });

  it('works on primitives', () => {
    const p = 'foobar';
    const clone = cloneShallow(p);
    expect(p).toBe(clone);
  });

  it('works on arrays', () => {
    const arr: any[] = [{ foo: 'bar' }];
    const clone = cloneShallow(arr);
    clone.push('foobar');
    clone[0].foo = 'fizzbuzz';
    expect(arr.length).toBe(1);
    expect(arr[0].foo).toBe('fizzbuzz');
    expect(clone[1]).toEqual('foobar');
  });

  it('works on buffers', () => {
    const buffer = Buffer.from('hello world', 'utf8');
    const clone = cloneShallow(buffer);
    buffer[1] = 'b'.charCodeAt(0);
    expect(clone[1]).toBe('e'.charCodeAt(0));
    expect(buffer[1]).toBe('b'.charCodeAt(0));
  });

  it('works on sets', () => {
    const obj: any = { a: 'bar' };
    const set = new Set([obj]);
    const clone = cloneShallow(set);
    expect(isEqual(clone, set)).toBe(true);
    obj.a = 'foo';
    expect([...clone.values()][0]).toEqual({ a: 'foo' });
    clone.add('bar');
    expect(set.size).not.toBe(clone.size);
  });

  it('works on maps', () => {
    const obj: any = { a: 'bar' };
    const set = new Map([[obj, obj]]);
    const clone = cloneShallow(set);
    expect(isEqual(clone, set)).toBe(true);
    obj.a = 'foo';
    expect([...clone.values()][0]).toEqual({ a: 'foo' });
    expect([...clone.keys()][0]).toEqual({ a: 'foo' });
    clone.set('foo', 'bar');
    expect(set.size).not.toBe(clone.size);
  });
});

describe('cloneDeep', () => {
  it('works on obj', () => {
    const obj: any = { a: { foo: 'bar' } };
    const clone = cloneDeep(obj);
    clone.b = 'foobar';
    clone.a.foo = 'fizzbuzz';
    expect(obj.b).toBeUndefined();
    expect(obj.a.foo).toBe('bar');
    expect(clone.b).toEqual('foobar');
    expect(clone.a.foo).toBe('fizzbuzz');
  });

  it('works on sets', () => {
    const obj: any = { a: 'bar' };
    const set = new Set([obj]);
    const clone = cloneDeep(set);
    expect(isEqual(clone, set)).toBe(true);
    obj.a = 'foo';
    expect([...clone.values()][0]).toEqual({ a: 'bar' });
    clone.add('bar');
    expect(set.size).not.toBe(clone.size);
    expect(isEqual(set, clone)).toBe(false);
  });

  it('works on arrays', () => {
    const arr: any[] = [{ foo: 'bar' }];
    const clone = cloneDeep(arr);
    clone.push('foobar');
    clone[0].foo = 'fizzbuzz';
    expect(arr.length).toBe(1);
    expect(arr[0].foo).toBe('bar');
    expect(clone[0].foo).toBe('fizzbuzz');
    expect(clone[1]).toEqual('foobar');
  });

  it('works on buffers', () => {
    const buffer = Buffer.from('hello world', 'utf8');
    const clone = cloneShallow(buffer);
    buffer[1] = 'b'.charCodeAt(0);
    expect(clone[1]).toBe('e'.charCodeAt(0));
    expect(buffer[1]).toBe('b'.charCodeAt(0));
  });

  it('works on buffers', () => {
    const buffer = Buffer.from('hello world', 'utf8');
    const clone = cloneDeep(buffer);
    buffer[1] = 'b'.charCodeAt(0);
    expect(clone[1]).toBe('e'.charCodeAt(0));
    expect(buffer[1]).toBe('b'.charCodeAt(0));
  });

  it('works on maps', () => {
    const obj: any = { a: 'bar' };
    const aMap = new Map([[obj, obj]]);
    const clone = cloneDeep(aMap);
    expect(isEqual(clone, aMap)).toBe(true);
    obj.a = 'foo';
    expect([...clone.values()][0]).toEqual({ a: 'bar' });
    expect([...clone.keys()][0]).toEqual({ a: 'bar' });
    clone.set('foo', 'bar');
    expect(aMap.size).not.toBe(clone.size);
    expect(isEqual(aMap, clone)).toBe(false);
  });

  it('works on primitives', () => {
    const p = 'foobar';
    const clone = cloneDeep(p);
    expect(p).toBe(clone);
  });
});
