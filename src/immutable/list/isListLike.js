import { isList } from './isList';

export function isListLike(obj) {
  if (isList(obj)) {
    return true;
  }
  if (!Array.isArray(obj)) {
    return false;
  }
  let curList = obj;
  while (curList && curList.length === 2) {
    if (!Array.isArray(curList[1])) {
      return false;
    }
    curList = curList[1];
  }
  return curList && curList.length === 0;
}
