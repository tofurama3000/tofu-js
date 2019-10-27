import { isInfinite } from '../is/isInfinite';
import { limit } from './limit';
import { toIterableOrEmpty } from './toIterableOrEmpty';
import { collectToList as listCollectToList } from '../immutable/list/index'

export const collectToList = (iterable, max = Infinity) => {
  const iter = isInfinite(max)
    ? toIterableOrEmpty(iterable)
    : limit(max, toIterableOrEmpty(iterable));
  return listCollectToList(iter);
}
