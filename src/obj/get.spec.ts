import { get, getIn, getInOr, getOr } from './get';

describe('get', () => {
  it('grabs values', () => {
    expect(get('a', { a: 5 })).toBe(5);
    expect(get(0, [4])).toBe(4);
  });

  it('defaults', () => {
    expect(get('b', { a: 5 })).toBeNull();
    expect(get(1, [4])).toBeNull();
  });

  it('non-objects', () => {
    expect(get('a', 5)).toBeNull();
  });
});

describe('getOr', () => {
  it('grabs values', () => {
    expect(getOr('a', 12, { a: 5 })).toBe(5);
    expect(getOr(0, 12, [4])).toBe(4);
  });

  it('defaults', () => {
    expect(getOr('b', 12, { a: 5 })).toBe(12);
    expect(getOr(1, 12, [4])).toBe(12);
  });

  it('non-objects', () => {
    expect(getOr('a', 16, 5)).toBe(16);
  });
});

describe('getIn', () => {
  it('grabs values', () => {
    expect(getIn('a', { a: 5 })).toBe(5);
    expect(getIn(0, [4])).toBe(4);
    expect(getIn(['a'], { a: 5 })).toBe(5);
    expect(getIn([0], [4])).toBe(4);

    expect(getIn(['a', 'b'], { a: { b: 5 } })).toBe(5);
    expect(getIn([0, 'c'], [{ c: 4 }])).toBe(4);
  });

  it('defaults', () => {
    expect(getIn('b', { a: 5 })).toBeNull();
    expect(getIn(1, [4])).toBeNull();
    expect(getIn(['b'], { a: 5 })).toBeNull();
    expect(getIn([1], [4])).toBeNull();
    expect(getIn(['b', 'c', 'd', 0, 'f'], { a: 5 })).toBeNull();
  });

  it('non-objects', () => {
    expect(get('a', 5)).toBeNull();
  });
});

describe('getInOr', () => {
  it('grabs values', () => {
    expect(getInOr('a', 12, { a: 5 })).toBe(5);
    expect(getInOr(0, 12, [4])).toBe(4);
    expect(getInOr(['a'], 12, { a: 5 })).toBe(5);
    expect(getInOr([0], 12, [4])).toBe(4);

    expect(getInOr(['a', 'b'], 12, { a: { b: 5 } })).toBe(5);
    expect(getInOr([0, 'c'], 12, [{ c: 4 }])).toBe(4);
  });

  it('defaults', () => {
    expect(getInOr('b', 12, { a: 5 })).toBe(12);
    expect(getInOr(1, 12, [4])).toBe(12);
    expect(getInOr(['b'], 12, { a: 5 })).toBe(12);
    expect(getInOr([1], 12, [4])).toBe(12);
    expect(getInOr(['b', 'c', 'd', 0, 'f'], 12, { a: 5 })).toBe(12);
  });

  it('non-objects', () => {
    expect(getInOr('a', 16, 5)).toBe(16);
  });
});
