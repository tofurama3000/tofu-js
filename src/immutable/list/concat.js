import {addListFunctions} from './__add-list-functions'

export function concat(list1, ...lists) {
  const [list2, ...rest] = lists;
  if (!list2 || !list2.length) {
    return rest.length ? concat(list1, ...rest) : list1;
  } else if (!list1.length) {
    return rest.length ? concat(list2, ...rest) : list2;
  }
  const newList = [];
  let curNewListElem = newList;
  let curList = list1;
  while (curList.length) {
    curNewListElem.push(curList[0]);
    if (curList[1].length) {
      curNewListElem.push([]);
    } else {
      curNewListElem.push(list2)
    }
    addListFunctions(curNewListElem)
    curNewListElem = curNewListElem[1];
    curList = curList[1];
  }
  return concat(newList, ...rest);
}
