import { count } from './count';
import { equals } from './equals';
import { isEmpty } from './isEmpty';
import { isListSym } from './__list-sym';
import { reduce } from './reduce';

export function add(list, elem) {
  return __addListFunctions([elem, list]);
}

export const collectToList = iterable => {
  const list = [];
  let curList = list;
  for (const elem of iterable) {
    curList.push(elem);
    curList.push([]);
    __addListFunctions(curList);
    curList = curList[1];
  }
  return __addListFunctions(list);
};

export function concat(list1, ...lists) {
  const [list2, ...rest] = lists;
  if (!list2 || !list2.length) {
    return rest.length ? concat(list1, ...rest) : list1;
  } else if (!list1.length) {
    return rest.length ? concat(list2, ...rest) : list2;
  }
  const newList = [];
  let curNewListElem = newList;
  let curList = list1;
  while (curList.length) {
    curNewListElem.push(curList[0]);
    if (curList[1].length) {
      curNewListElem.push([]);
    } else {
      curNewListElem.push(list2);
    }
    __addListFunctions(curNewListElem);
    curNewListElem = curNewListElem[1];
    curList = curList[1];
  }
  return concat(newList, ...rest);
}

export function drop(list, count = 1) {
  let curList = list;
  for (let i = 0; i < count && curList && curList.length; ++i) {
    curList = curList[1];
  }
  return curList || __addListFunctions([]);
}

export function dropFirst(list) {
  return drop(list);
}

export function map(list, func) {
  let curList = list;
  let newList = [];
  while (curList && curList.length) {
    newList.push(func(curList[0]));
    curList = curList[1];
  }
  return toList(newList);
}

export function nestedToList(obj) {
  return listify(obj);
}

export function reverse(list) {
  let newList = __addListFunctions([]);
  let curList = list;
  while (curList.length) {
    newList = __addListFunctions([curList[0], newList]);
    curList = curList[1];
  }
  return newList;
}

export function split(list, index = 1) {
  let curList = list;
  let previous = [];
  for (let i = 0; i < index && curList && curList.length; ++i) {
    previous.push(curList[0]);
    curList = curList[1];
  }
  return [toList(previous), curList || []];
}

export function splitOn(list, fn) {
  let previous = [];
  let curList = list;
  for (; curList && curList.length && !fn(curList[0]); curList = curList[1]) {
    previous.push(curList[0]);
  }
  return [toList(previous), curList || []];
}

export function toArray(list) {
  const array = [];
  let curList = list;
  while (curList.length) {
    array.push(curList[0]);
    curList = curList[1];
  }
  return array;
}

export function toList(obj) {
  if (!Array.isArray(obj)) {
    return listify([obj, []]);
  }
  return listify(obj, 1);
}

export function __addListFunctions(list) {
  list.__proto__ = Object;
  list[Symbol.iterator] = function*() {
    let arr = this;
    while (arr && arr.length) {
      yield arr[0];
      arr = arr[1];
    }
  };

  list[isListSym] = true;

  bindFuncs(
    list,
    add,
    concat,
    count,
    drop,
    dropFirst,
    equals,
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

function listify(obj, depth = -1) {
  if (depth == 0) return obj;
  if (Array.isArray(obj)) {
    return obj
      .map(obj => listify(obj, depth - 1))
      .reverse()
      .reduce((list, elem) => __addListFunctions([elem, list]), __addListFunctions([]));
  } else if (obj instanceof Map) {
    const newMap = new Map();
    obj.forEach((v, k) => {
      newMap.set(listify(k, depth - 1), listify(v, depth - 1));
    });
    return newMap;
  } else if (obj instanceof Set) {
    const newSet = new Set();
    obj.forEach(v => {
      newSet.add(listify(v, depth - 1));
    });
    return newSet;
  } else if (typeof obj === 'object') {
    return Object.entries(obj)
      .map(([k, v]) => [k, listify(v, depth - 1)])
      .reduce((acc, [k, v]) => ({ ...acc, ...{ [k]: v } }), {});
  } else {
    return obj;
  }
}
