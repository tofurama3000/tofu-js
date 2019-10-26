import { toList } from './impl';

export function splitOn(list, fn) {
  let previous = [];
  let curList = list;
  for (; curList && curList.length && !fn(curList[0]); curList = curList[1]) {
    previous.push(curList[0]);
  }
  return [toList(previous), curList || []];
}
