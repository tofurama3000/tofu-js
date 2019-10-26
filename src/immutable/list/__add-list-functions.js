import { map } from './map';
import { count } from './count';
import { isEmpty } from './isEmpty';
import { split } from './split';
import { splitOn } from './splitOn';
import { add } from './add';
import { drop, dropFirst } from './drop';
import { reverse } from './reverse';
import { concat } from './concat';
import { reduce } from './reduce';

export function addListFunctions(list) {
  list.__proto__ = Object;
  list[Symbol.iterator] = function*() {
    let arr = this;
    while (arr && arr.length) {
      yield arr[0];
      arr = arr[1];
    }
  };

  bindFuncs(
    list,
    add,
    concat,
    count,
    drop,
    dropFirst,
    isEmpty,
    map,
    reduce,
    reverse,
    split,
    splitOn
  );

  return list;
}

function bindFuncs(list, ...funcs) {
  funcs.forEach(func => bindFunc(list, func));
}

function bindFunc(list, func) {
  list[func.name] = (...args) => func(list, ...args);
}
