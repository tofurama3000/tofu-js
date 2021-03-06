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

import { List, ListBase, IList } from './__list-sym';
import { count } from './count';
import { equals } from './equals';
import { isEmpty } from './isEmpty';
import { isListSym } from './__list-sym';
import { reduce } from './reduce';
import { isArray } from '../../is/isArray';
import { isObject } from '../../is/isObject';
import { isFunction } from '../../is/isFunction';
import { entries } from '../../obj/entries';
import { fromPairs } from '../../iterables/fromPairs';
import { isList } from './isList';
import { isListLike } from './isListLike';
import { Nullable, Predicate } from '../../commonTypes';

export function emptyList<T>(): List<T> {
  return __addListFunctions([]);
}

/**
 * Returns the first element in a list or null if the list is empty
 * @param {List} list List to add the element to
 * @returns {any} First element of the list
 */
export function first<T>(list: ListBase<T>): Nullable<T> {
  return isEmpty(list) ? null : list[0];
}

/**
 * Returns the list excluding the first element or an empty list if it is empty
 * @param {List} list List
 * @returns {List} List without the first element
 */
export function rest<T>(list: ListBase<T> | List<T>): List<T> {
  if (isEmpty(list)) {
    return emptyList<T>();
  } else if (isList(list[1])) {
    return list[1];
  } else {
    return __addListFunctions(list[1]);
  }
}

/**
 * Adds an element to the front of an immutable list
 * @param {List} list List to add the element to
 * @param {any} elem The element to add
 * @returns {List} A list with the element added
 */
export function add<T>(list: ListBase<T>, elem: T): List<T> {
  return __addListFunctions([elem, list]);
}

/**
 * Collects all items from an iterable into an immutable list
 * Note: This will hang for infinite iterables
 * @param iterable
 */
export const collectToList = <T>(iterable: Iterable<T>): List<T> => {
  const list = [];
  let curList = list;
  for (const elem of iterable) {
    curList.push(elem);
    curList.push([]);
    __addListFunctions(curList as ListBase<T>);
    curList = curList[1];
  }
  return __addListFunctions(list as ListBase<T>);
};

/**
 * Concatenates immutable lists
 * @param {List} list1 A list to concatenate
 * @param {...List} lists Other lists to concatenate
 * @returns {List} A list that is the result of concatenating previous lists
 */
export function concat<T>(list1: ListBase<T>, ...lists: ListBase<T>[]): List<T> {
  const [list2, ...rest] = lists;
  if (!list2 || !list2.length) {
    if (rest.length) {
      return concat(list1, ...rest);
    } else if (isList(list1)) {
      return list1;
    } else {
      return __addListFunctions(list1);
    }
  } else if (!list1.length) {
    if (rest.length) {
      return concat(list2, ...rest);
    } else if (isList(list2)) {
      return list2;
    } else {
      return __addListFunctions(list2);
    }
  }
  const newList = [];
  let curNewListElem = newList;
  let curList: ListBase<T> = list1;
  while (curList.length) {
    curNewListElem.push(curList[0]);
    if (curList[1].length) {
      curNewListElem.push([]);
    } else {
      curNewListElem.push(list2);
    }
    __addListFunctions(curNewListElem as ListBase<T>);
    curNewListElem = curNewListElem[1];
    curList = curList[1];
  }
  return concat(newList as List<T>, ...rest);
}

/**
 * Drops n elements from the start of a list
 * @param {List} list List to operate on
 * @param {number} n The number of elements to drop
 * @returns {List} A list with that many elements dropped
 */
export function drop<T>(list: ListBase<T>, n: number = 1): ListBase<T> {
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
export function dropFirst<T>(list: ListBase<T>): ListBase<T> {
  return drop(list);
}

/**
 * Calls func on every element in a list and returns the results as a list
 * @param {List} list List to operate on
 * @param {function} func The function to call
 * @returns {List} The resulting list
 */
export function map<T, G>(list: ListBase<T>, func: (T) => G): List<G> {
  let curList = list;
  let newList: G[] = [];
  while (curList && curList.length) {
    newList.push(func(curList[0]));
    curList = curList[1];
  }
  return toList(newList);
}

/**
 * Converts all nested arrays in an object into lists
 * Note: if given a non-iterable it will not wrap it in a list
 *
 * @param {any} obj Object to covert
 * @param {bool} convertObjects Should convert object elements (defaults to false)
 * @returns {List | any} The resulting list
 */
export function nestedToList(obj, convertObjects = false) {
  return listify(obj, convertObjects);
}

/**
 * Reverses a list
 * @param {List} list List to operate on
 * @returns {List} The reversed list
 */
export function reverse<T>(list: ListBase<T>): List<T> {
  let newList = __addListFunctions<T>([]);
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
export function split<T>(list: ListBase<T>, index = 1): [List<T>, List<T>] {
  let curList = list;
  let previous = [];
  for (let i = 0; i < index && curList && curList.length; ++i) {
    previous.push(curList[0]);
    curList = curList[1];
  }
  let otherList: ListBase<T> = curList || __addListFunctions([]);

  return [toList(previous), isList(otherList) ? otherList : __addListFunctions(otherList)];
}

/**
 * Splits a list at the first element to return true from a predicate
 * @param {List} list List to operate on
 * @param {Predicate} predicate The predicate to use
 * @returns {List[]} The resulting list pair
 */
export function splitOn<T>(list: ListBase<T>, predicate: Predicate<T>): [List<T>, List<T>] {
  let previous = [];
  let curList = list;
  for (; curList && curList.length && !predicate(curList[0]); curList = curList[1]) {
    previous.push(curList[0]);
  }
  let otherList: ListBase<T> = curList || __addListFunctions([]);

  return [toList(previous), isList(otherList) ? otherList : __addListFunctions(otherList)];
}

/**
 * Converts a list to an array
 * @param {List} list List to operate on
 * @returns {any[]} The resulting array
 */
export function toArray<T>(list: ListBase<T>): T[] {
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
  if (isList(list) || isListLike(list)) {
    const array = [];
    let curList = list;
    while (curList.length) {
      array.push(toArrayNested(curList[0]));
      curList = curList[1];
    }
    return array;
  } else if (isArray(list)) {
    return list;
  } else if (isFunction(list)) {
    return list;
  } else if (isObject(list)) {
    return fromPairs(
      entries(list).map(([key, value]) => [key, toArrayNested(value)]) as [any, any]
    );
  } else {
    return list;
  }
}

/**
 * Converts an array to a list or wraps an object in a list
 *
 * This does not affect any nested arrays
 *
 * @param {any[] | any} obj The object to turn into a list
 * @returns {List} The resulting list
 */
export function toList<T>(obj: T | T[]): List<T> {
  if (!Array.isArray(obj)) {
    return listify([obj, []]);
  }
  return listify(obj, false, 1);
}

export function __addListFunctions<T>(list: ListBase<T>): List<T> {
  (list as any).__proto__ = Object;
  list[Symbol.iterator] = function*() {
    let arr = this;
    while (arr && arr.length) {
      yield arr[0];
      arr = arr[1];
    }
  };

  list[isListSym] = true;

  bindFuncs(list, {
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
  });

  return (list as any) as List<T>;
}

function bindFuncs(list, funcs) {
  Object.entries(funcs).forEach(func => bindFunc(list, func));
}

function bindFunc(list, [key, func]) {
  list[key] = (...args) => func(list, ...args);
}

function listify(obj, convertObject = false, depth = -1) {
  if (depth == 0) return obj;
  if (Array.isArray(obj)) {
    return obj
      .map(obj => listify(obj, convertObject, depth - 1))
      .reverse()
      .reduce((list, elem) => __addListFunctions([elem, list]), __addListFunctions([]));
  } else if (!convertObject) {
    return obj;
  } else if (obj instanceof Map) {
    const newMap = new Map();
    obj.forEach((v, k) => {
      newMap.set(listify(k, convertObject, depth - 1), listify(v, convertObject, depth - 1));
    });
    return newMap;
  } else if (obj instanceof Set) {
    const newSet = new Set();
    obj.forEach(v => {
      newSet.add(listify(v, convertObject, depth - 1));
    });
    return newSet;
  } else if (typeof obj === 'object') {
    return Object.entries(obj)
      .map(([k, v]) => [k, listify(v, convertObject, depth - 1)])
      .reduce((acc, [k, v]) => ({ ...acc, ...{ [k]: v } }), {});
  } else {
    return obj;
  }
}

export * from './count';
export * from './equals';
export * from './isList';
export * from './isEmpty';
export * from './isListLike';
export * from './reduce';
