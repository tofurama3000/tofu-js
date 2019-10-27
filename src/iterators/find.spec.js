import { find } from "./find"

describe('Iterable find', () => {
  it('returns the first element that matches a predicate', () => {
    expect(find(x => x % 2 === 0, [1, 3, 5, 6, 8, 9, 10])).toBe(6)
    expect(find(x => x % 2 === 1, [1, 3, 5, 6, 8, 9, 10])).toBe(1)
    expect(find(x => x % 3 === 2, [1, 3, 5, 6, 8, 9, 10])).toBe(5)
  })
})