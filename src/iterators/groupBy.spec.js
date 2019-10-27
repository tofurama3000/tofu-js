import { groupBy } from "./groupBy"

describe('Iterator groupBy', () => {
  it('Returns {} for an empty iterable', () => {
    expect(groupBy(x => x, [])).toEqual({})
  })

  it('groups elements', () => {
    expect(groupBy(x => x | 0, [1, 1.2, 2.5, 6, 2.3, 1.9])).toEqual({
      1: [1, 1.2, 1.9],
      2: [2.5, 2.3],
      6: [6]
    })
  })
})