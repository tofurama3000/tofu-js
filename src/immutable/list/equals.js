export function equals(list1, list2) {
  let curList1 = list1,
    curList2 = list2;
  while (curList1 && curList2 && curList1.length && curList2.length) {
    if (curList1[0] !== curList2[0]) {
      return false;
    }
    curList1 = curList1[1];
    curList2 = curList2[1];
  }
  return curList1 && curList2 && curList2.length === curList1.length;
}
