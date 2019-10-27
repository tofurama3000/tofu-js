import { find } from "./find"
import { collectToArray } from "./collectToArray"

describe('Iterable find', () => {
  it('returns the first element that matches a predicate', () => {
    expect(collectToArray(find(x => x % 2 === 0, [1, 3, 5, 6, 8, 9, 10]))).toEqual([6])
    expect(collectToArray(find(x => x % 2 === 1, [1, 3, 5, 6, 8, 9, 10]))).toEqual([1])
    expect(collectToArray(find(x => x % 3 === 2, [1, 3, 5, 6, 8, 9, 10]))).toEqual([5])
    expect(collectToArray(find(x => x > 12, [1, 3, 5, 6, 8, 9, 10]))).toEqual([])
  })
})