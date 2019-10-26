import { isInfinite } from '../is';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import {addListFunctions} from '../immutable/list/__add-list-functions'

export const collectToList = (iterable, max = Infinity) => {
  const iter = isInfinite(max) ? toIterableOrEmpty(iterable) : limit(max, toIterableOrEmpty(iterable))
  const list = []
  let curList = list
  for(const elem of iter) {
    curList.push(elem)
    curList.push([])
    addListFunctions(curList)
    curList = curList[1]
  }
  return addListFunctions(list)
}
