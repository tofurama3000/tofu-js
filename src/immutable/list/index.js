/**
 * An immutable list
 * @module immutable:List
 */
export * from './count';
export * from './equals';
export * from './isEmpty';
export * from './isList';
export * from './isListLike';
export * from './reduce';

import { count } from './count';
import { equals } from './equals';
import { isEmpty } from './isEmpty';
import { isListSym } from './__list-sym';
import { reduce } from './reduce';
import { isList } from './isList';

export function emptyList() {
  return __addListFunctions([]);
}

/**
 * Returns the first element in a list or null if the list is empty
 * @param {List} list List to add the element to
 * @returns {any} First element of the list
 */
export function first(list) {
  return list.isEmpty() ? null : list[0];
}

/**
 * Returns the list excluding the first element or an empty list if it is empty
 * @param {List} list List
 * @returns {List} List without the first element
 */
export function rest(list) {
  return list.isEmpty() ? emptyList() : list[1];
}

/**
 * Adds an element to the front of an immutable list
 * @param {List} list List to add the element to
 * @param {any} elem The element to add
 * @returns {List} A list with the element added
 */
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

/**
 * Concatenates immutable lists
 * @param {List} list1 A list to concatenate
 * @param {...List} lists Other lists to concatenate
 * @returns {List} A list that is the result of concatenating previous lists
 */
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

/**
 * Drops n elements from the start of a list
 * @param {List} list List to operate on
 * @param {number} n The number of elements to drop
 * @returns {List} A list with that many elements dropped
 */
export function drop(list, n = 1) {
  let curList = list;
  for (let i = 0; i < n && curList && curList.length; ++i) {
    curList = curList[1];
  }
  return curList || __addListFunctions([]);
}

/**
 * Drops the first element from the start of a list
 * @param {List} list List to operate on
 * @returns {List} A list with the first element dropped
 */
export function dropFirst(list) {
  return drop(list);
}

/**
 * Calls func on every element in a list and returns the results as a list
 * @param {List} list List to operate on
 * @param {function} func The function to call
 * @returns {List} The resulting list
 */
export function map(list, func) {
  let curList = list;
  let newList = [];
  while (curList && curList.length) {
    newList.push(func(curList[0]));
    curList = curList[1];
  }
  return toList(newList);
}

/**
 * Converts all nested arrays in an object into lists
 * @param {any} obj Object to covert
 * @returns {List} The resulting list
 */
export function nestedToList(obj) {
  return listify(obj);
}

/**
 * Reverses a list
 * @param {List} list List to operate on
 * @returns {List} The reversed list
 */
export function reverse(list) {
  let newList = __addListFunctions([]);
  let curList = list;
  while (curList.length) {
    newList = __addListFunctions([curList[0], newList]);
    curList = curList[1];
  }
  return newList;
}

/**
 * Splits a list at an index where all elements at that index and after are put into a separate list
 * @param {List} list List to operate on
 * @param {number} index (Optional, default 1) The index to split the list at
 * @returns {List[]} A pair of lists representing the split
 */
export function split(list, index = 1) {
  let curList = list;
  let previous = [];
  for (let i = 0; i < index && curList && curList.length; ++i) {
    previous.push(curList[0]);
    curList = curList[1];
  }
  return [toList(previous), curList || []];
}

/**
 * Splits a list at the first element to return true from a predicate
 * @param {List} list List to operate on
 * @param {Predicate} predicate The predicate to use
 * @returns {List[]} The resulting list pair
 */
export function splitOn(list, predicate) {
  let previous = [];
  let curList = list;
  for (; curList && curList.length && !predicate(curList[0]); curList = curList[1]) {
    previous.push(curList[0]);
  }
  return [toList(previous), curList || []];
}

/**
 * Converts a list to an array
 * @param {List} list List to operate on
 * @returns {any[]} The resulting array
 */
export function toArray(list) {
  const array = [];
  let curList = list;
  while (curList.length) {
    array.push(curList[0]);
    curList = curList[1];
  }
  return array;
}

/**
 * Converts a list and all sub-lists to an array
 * @param {List} list List to operate on
 * @returns {any[]} The resulting array
 */
export function toArrayNested(list) {
  const array = [];
  let curList = list;
  while (curList.length) {
    array.push(isList(curList[0]) ? toArrayNested(curList[0]) : curList[0]);
    curList = curList[1];
  }
  return array;
}

/**
 * Converts an array to a list or wraps an object in a list
 *
 * This does not affect any nested arrays
 *
 * @param {any[] | any} obj The object to turn into a list
 * @returns {List} The resulting list
 */
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
    first,
    isEmpty,
    map,
    reduce,
    rest,
    reverse,
    split,
    splitOn,
    toArray
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
