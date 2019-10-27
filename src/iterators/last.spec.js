import { last } from "./last"

describe('Iterable last', () => {
  it('returns the last value', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5)
    expect(last([1, 2, 3, 4, 5, 6])).toBe(6)
  })
})