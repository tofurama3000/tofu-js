import { isArray, isBuffer, isIterable, isMap, isObject, isSet } from '../is/index';
import { zip } from '../arrays/index';
import { map, reduce } from '../iterators/index';
import { pipe } from '../fp/index';

export function isEqual(left: any, right: any): boolean {
  if (typeof left !== typeof right) return false;
  // can't compare, possibly infinite
  else if (isIterable(left)) return isIterable(right);
  else if (isArray(left)) {
    if (!isArray(right)) return false;
    if (left.length !== right.length) return false;
    const pairs: [[any, any]] = zip(left, right) as any;
    for (const pair of pairs) {
      if (!isEqual(pair[0], pair[1])) return false;
    }
    return true;
  } else if (isBuffer(left)) {
    if (!isBuffer(right)) return false;
    return left.compare(right) === 0;
  } else if (isSet(left)) {
    if (!isSet(right)) return false;
    const compare = (lSet: Set<any>, rSet: Set<any>) =>
      pipe(
        lSet,
        (s: Set<any>) => s.entries(),
        map((elem: any) => rSet.has(elem)),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else if (isMap(left)) {
    if (!isMap(right)) return false;
    const compare = (lMap: Map<any, any>, rMap: Map<any, any>) =>
      pipe(
        lMap,
        (s: Set<any>) => s.entries(),
        map(([key, val]: any) => rMap.has(key) && isEqual(val, rMap.get(key))),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else if (isObject(left)) {
    if (!isObject(right)) return false;
    const compare = (lMap: object, rMap: object) =>
      pipe(
        lMap,
        (s: object) => Object.entries(s),
        map(([key, val]: any) => key in rMap && isEqual(val, rMap[key])),
        reduce((a, c) => a && c, true)
      );
    return compare(left, right) && compare(right, left);
  } else return left === right;
}
