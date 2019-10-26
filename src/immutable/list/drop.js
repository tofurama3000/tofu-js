import { addListFunctions } from "./__add-list-functions";

export function drop(list, count = 1) {
  let curList = list;
  for (let i = 0; i < count && curList && curList.length; ++i) {
    curList = curList[1];
  }
  return curList || addListFunctions([]);
}

export function dropFirst(list) {
  return drop(list);
}


