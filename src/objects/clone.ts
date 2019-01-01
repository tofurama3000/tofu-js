import { isArray, isObject, isBuffer, isSet, isMap } from '../is';
import { map } from '../arrays';
import { reduce } from '../iterators';

export function cloneShallow<T>(obj: T): T {
  if (isArray(obj)) return (obj.slice(0) as any) as T;
  else if (isBuffer(obj)) return (Buffer.from(obj) as any) as T;
  else if (isSet(obj)) return reduce((a, c) => a.add(c), new Set(), obj.entries());
  else if (isMap(obj)) return reduce((a, [key, val]) => a.set(key, val), new Map(), obj.entries());
  else if (isObject(obj)) return Object.assign({}, obj);
  else return obj;
}

export function cloneDeep<T>(obj: T): T {
  if (isArray(obj)) return (map(cloneDeep, obj) as any) as T;
  else if (isBuffer(obj)) return (Buffer.from(obj) as any) as T;
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
      copy[prop as string] = cloneDeep(obj[prop]);
    }
    // tslint:enable
    return (copy as any) as T;
  } else return obj;
}
