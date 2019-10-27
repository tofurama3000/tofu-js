import { forEach } from "./forEach"

describe('Iterable forEach', () => {
  it('runs function for each element', () => {
    const arr = []
    const f = x => arr.push(x)
    forEach(f, [1, 2, 3])
    expect(arr).toEqual([1, 2, 3])
  })
})