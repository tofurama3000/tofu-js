import {
  isArray,
  isBuffer,
  isIterable,
  isMap,
  isNull,
  isObject,
  isSet,
  isUndefined
} from '../is/index';
import { zip } from '../arrays/index';
import { map } from '../iterators/map';
import {reduce} from '../iterators/reduce'
import { pipe } from '../fp/pipe';

export function isEqual(left, right) {
  if (isNull(left) && isNull(right)) return true;
  if (isUndefined(left) && isUndefined(right)) return true;
  if (typeof left !== typeof right) return false;
  // can't compare, possibly infinite
  else if (isIterable(left)) return isIterable(right);
  else if (isArray(left)) {
    if (!isArray(right)) return false;
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
    const compare = (lSet, rSet) =>
      pipe(
        lSet,
        s => s.entries(),
        map(elem => rSet.has(elem)),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else if (isMap(left)) {
    if (!isMap(right)) return false;
    const compare = (lMap, rMap) =>
      pipe(
        lMap,
        s => s.entries(),
        map(([key, val]) => rMap.has(key) && isEqual(val, rMap.get(key))),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else if (isObject(left)) {
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
