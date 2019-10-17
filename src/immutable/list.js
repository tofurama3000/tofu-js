export function concat(list1, list2) {
  if (!list2.length) return list1;
  else if (!list1.length) return list2;
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
  return newList;
}

export function nestedToList(obj) {
  return addListFunctions(listify(obj));
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
    return addListFunctions([obj, []]);
  }
  return addListFunctions(listify(obj, 1));
}

function listify(obj, depth = -1) {
  if (depth == 0) return obj;
  if (Array.isArray(obj)) {
    return obj
      .map(obj => listify(obj, depth - 1))
      .reverse()
      .reduce((list, elem) => [elem, list], []);
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

function addListFunctions(list) {
  list.concat = function(otherList) {
    return addListFunctions(concat(this, otherList));
  };
  list.add = function(elem) {
    return addListFunctions([elem, this]);
  };
  list.removeFirst = function() {
    return addListFunctions(this[1]);
  };
  list.reverse = function() {
    return addListFunctions(reverse(this));
  };
  list.toArray = function() {
    return toArray(this);
  };
  return list;
}
