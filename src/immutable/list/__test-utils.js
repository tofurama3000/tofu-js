export function assertEqualLists(l1, l2) {
  expect(JSON.stringify(l1)).toBe(JSON.stringify(l2));
}
