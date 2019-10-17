export function count(list) {
  let i = 0;
  for (const v of list) ++i;
  return i;
}

export function splitOn(list, fn) {
  let previous = [];
  let curList = list;
  for (; curList && curList.length && !fn(curList[0]); curList = curList[1]) {
    previous.push(curList[0]);
  }
  return [toList(previous), curList || []];
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

export function add(list, elem) {
  return [elem, list];
}

export function drop(list, count = 1) {
  let curList = list;
  for (let i = 0; i < count && curList && curList.length; ++i) {
    curList = curList[1];
  }
  return curList || [];
}

export function dropFirst(list) {
  return drop(list);
}

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
    curNewListElem.push([]);
    curNewListElem = curNewListElem[1];
    curList = curList[1];
  }
  curNewListElem.push(...list2);
  return concat(newList, ...rest);
}

export function nestedToList(obj) {
  return listify(obj);
}

export function reverse(list) {
  let newList = [];
  let curList = list;
  while (curList.length) {
    newList = [curList[0], newList];
    curList = curList[1];
  }
  return newList;
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
    return [obj, []];
  }
  return listify(obj, 1);
}

function listify(obj, depth = -1) {
  if (depth == 0) return obj;
  if (Array.isArray(obj)) {
    return obj
      .map(obj => listify(obj, depth - 1))
      .reverse()
      .reduce((list, elem) => addListIterator([elem, list]), []);
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

function addListIterator(list) {
  list[Symbol.iterator] = function*() {
    let arr = this;
    while (arr && arr.length) {
      yield arr[0];
      arr = arr[1];
    }
  };
  return list;
}
