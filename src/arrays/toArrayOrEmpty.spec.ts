import { toArrayOrEmpty } from './toArrayOrEmpty';

describe('toArrayOrEmpty', () => {
  it('passes arrays through', () => {
    const arr = [1, 2, 3];
    expect(toArrayOrEmpty(arr)).toBe(arr);
  });

  it('returns an empty array for non-arrays', () => {
    expect(toArrayOrEmpty(1)).toEqual([]);
    expect(toArrayOrEmpty('1')).toEqual([]);
    expect(toArrayOrEmpty(() => 1)).toEqual([]);
    expect(toArrayOrEmpty({ l: 1 })).toEqual([]);
    expect(toArrayOrEmpty(null)).toEqual([]);
    expect(toArrayOrEmpty(undefined)).toEqual([]);
  });
});
