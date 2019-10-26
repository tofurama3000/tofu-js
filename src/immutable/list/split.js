import {toList} from './impl'

export function split(list, index = 1) {
  let curList = list;
  let previous = [];
  for (let i = 0; i < index && curList && curList.length; ++i) {
    previous.push(curList[0]);
    curList = curList[1];
  }
  return [toList(previous), curList || []];
}
