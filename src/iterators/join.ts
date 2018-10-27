import { toIterableOrEmpty } from './toIterableOrEmpty';
import { curry } from '../fp';
import { collectToArray } from './collectToArray';

export const join = curry<string, Iterable<any>, IterableIterator<any>>(function*(
  separator: string,
  iterable: Iterable<any>
) {
  yield collectToArray(toIterableOrEmpty(iterable)).join(separator);
});
