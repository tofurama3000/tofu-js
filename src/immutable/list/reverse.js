import { addListFunctions } from './__add-list-functions';

export function reverse(list) {
  let newList = addListFunctions([]);
  let curList = list;
  while (curList.length) {
    newList = addListFunctions([curList[0], newList]);
    curList = curList[1];
  }
  return newList;
}
