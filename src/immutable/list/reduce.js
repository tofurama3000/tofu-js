export function reduce(list, func, initialValue = 0) {
  let acc = initialValue;
  let curList = list;
  while (curList && curList.length) {
    acc = func(acc, curList[0]);
    curList = curList[1];
  }
  return acc;
}
