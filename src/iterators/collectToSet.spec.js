import { collectToSet } from "./collectToSet"

describe('Iterable collectToSet', () => {
  it('collects elements to a set', () => {
    expect(collectToSet([1, 2, 3, 3, 4])).toEqual(new Set([1, 2, 3, 3, 4]))
    expect([...collectToSet([1, 2, 3, 3, 4]).values()]).toEqual([1, 2, 3, 4]);
  })
})