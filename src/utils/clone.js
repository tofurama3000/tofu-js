import { isArray, isObject, isBuffer, isSet, isMap } from '../is/index';
import { map } from '../arrays/index';
import { reduce } from '../iterators/index';

export function cloneShallow(obj) {
  if (isArray(obj)) return obj.slice(0);
  else if (isBuffer(obj)) return Buffer.from(obj);
  else if (isSet(obj)) return reduce((a, c) => a.add(c), new Set(), obj.entries());
  else if (isMap(obj)) return reduce((a, [key, val]) => a.set(key, val), new Map(), obj.entries());
  else if (isObject(obj)) return Object.assign({}, obj);
  else return obj;
}

export function cloneDeep(obj) {
  if (isArray(obj)) return map(cloneDeep, obj);
  else if (isBuffer(obj)) return Buffer.from(obj);
  else if (isSet(obj)) return reduce((a, c) => a.add(cloneDeep(c)), new Set(), obj.entries());
  else if (isMap(obj))
    return reduce(
      (a, [key, val]) => a.set(cloneDeep(key), cloneDeep(val)),
      new Map(),
      obj.entries()
    );
  else if (isObject(obj)) {
    const copy = {};
    // tslint:disable
    for (const prop in obj) {
      copy[prop] = cloneDeep(obj[prop]);
    }
    // tslint:enable
    return copy;
  } else return obj;
}
