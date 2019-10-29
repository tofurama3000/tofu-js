/**
 * @module is:isEqual
 * @ignore
 */
import {
  isArray,
  isBuffer,
  isIterable,
  isMap,
  isNull,
  isObject,
  isSet,
  isUndefined
} from './index';
import { zip } from '../iterables/zip';
import { map } from '../iterables/map';
import { reduce } from '../iterables/reduce';
import { all } from '../iterables/all';
import { pipe } from '../fp/pipe';
import { isList } from '../immutable/list/isList';
import { isListLike } from '../immutable/list/isListLike';

/**
 * Performs value equality on the parameters to test for equality
 * 
 * Note: This is slow since it does traverse all elements in a collection
 * 
 * @kind function
 * @param {any} left The first object to test
 * @param {any} right The second object to test* 
 * @returns {boolean} Whether or not they are equal
 */
export function isEqual(left, right) {
  if (isNull(left) && isNull(right)) return true;
  if (isUndefined(left) && isUndefined(right)) return true;
  if (typeof left !== typeof right) return false;
  else if (isList(left) && isList(right)) return listEquals(left, right);
  else if (isList(left) && isListLike(right)) return listEquals(left, right);
  else if (isList(right) && isListLike(left)) return listEquals(left, right);
  else if (isArray(left) && isArray(right) && !isList(left) && !isList(right)) {
    if (left.length !== right.length) return false;
    const pairs = zip(left, right);
    for (const pair of pairs) {
      if (!isEqual(pair[0], pair[1])) return false;
    }
    return true;
  } else if (isBuffer(left)) {
    if (!isBuffer(right)) return false;
    return left.compare(right) === 0;
  } else if (isSet(left)) {
    if (!isSet(right)) return false;
    if (left.size !== right.size) return false;
    return pipe(
      left,
      s => s.values(),
      map(elem => {
        for (const e of right.values()) {
          if (isEqual(e, elem)) return true;
        }
        return false;
      }),
      all(b => !!b)
    );
  } else if (isMap(left)) {
    if (!isMap(right)) return false;
    if (left.size !== right.size) return false;
    return pipe(
      left,
      s => s.entries(),
      map(entry => {
        for (const e of right.entries()) {
          if (isEqual(e, entry)) return true;
        }
        return false;
      }),
      all(b => !!b)
    );
  } else if (isIterable(left) && isIterable(right))
    return all(([a, b]) => isEqual(a, b), zip(left, right));
  else if (isObject(left)) {
    if (!isObject(right)) return false;
    const compare = (lMap, rMap) =>
      pipe(
        lMap,
        s => Object.entries(s),
        map(([key, val]) => key in rMap && isEqual(val, rMap[key])),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else return left === right;
}

function listEquals(list1, list2) {
  let curList1 = list1;
  let curList2 = list2;
  while (curList1 && curList2 && curList1.length && curList2.length) {
    if (!isEqual(curList1[0], curList2[0])) {
      return false;
    }
    curList1 = curList1[1];
    curList2 = curList2[1];
  }
  return curList1 && curList2 && curList2.length === curList1.length;
}
