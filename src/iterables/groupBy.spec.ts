import { groupBy, groupByKey, indexBy, indexByKey } from './groupBy';

describe('Iterator groupBy', () => {
  it('Returns {} for an empty iterable', () => {
    expect(groupBy(x => x, [])).toEqual({});
  });

  it('groups elements', () => {
    expect(groupBy(x => x | 0, [1, 1.2, 2.5, 6, 2.3, 1.9])).toEqual({
      1: [1, 1.2, 1.9],
      2: [2.5, 2.3],
      6: [6]
    });
  });
});

describe('Iterator groupByKey', () => {
  it('Returns {} for an empty iterable', () => {
    expect(groupByKey('a', [])).toEqual({});
  });

  it('groups elements', () => {
    expect(
      groupByKey('a', [
        { a: 1, b: 1 },
        { a: 1, b: 2 },
        { a: 3, b: 3 }
      ])
    ).toEqual({
      1: [
        { a: 1, b: 1 },
        { a: 1, b: 2 }
      ],
      3: [{ a: 3, b: 3 }]
    });
  });
});

describe('Iterator indexBy', () => {
  it('Returns {} for an empty iterable', () => {
    expect(indexBy(x => x, [])).toEqual({});
  });

  it('groups elements', () => {
    expect(indexBy(x => x | 0, [1, 1.2, 2.5, 6, 2.3, 1.9])).toEqual({
      1: 1.9,
      2: 2.3,
      6: 6
    });
  });
});

describe('Iterator indexByKey', () => {
  it('Returns {} for an empty iterable', () => {
    expect(indexByKey('a', [])).toEqual({});
  });

  it('groups elements', () => {
    expect(
      indexByKey('a', [
        { a: 1, b: 1 },
        { a: 1, b: 2 },
        { a: 3, b: 3 }
      ])
    ).toEqual({
      1: { a: 1, b: 2 },
      3: { a: 3, b: 3 }
    });
  });
});
