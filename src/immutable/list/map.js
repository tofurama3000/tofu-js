import { toList } from './impl';

export function map(list, func) {
  let curList = list;
  let newList = [];
  while (curList && curList.length) {
    newList.push(func(curList[0]));
    curList = curList[1];
  }
  return toList(newList);
}
