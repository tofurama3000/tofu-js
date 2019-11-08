/**
 * @module immutable:List:reduce
 * @ignore
 */

/**
 * Accumulate the values of a list using a function
 * @param {List} list List to accumulate
 * @param {function} func Function to accumulate with
 * @param {any} initialValue The initial value for accumulation
 * @returns {any} The result of the list
 */
export function reduce(list, func, initialValue = 0) {
  let acc = initialValue;
  let curList = list;
  while (curList && curList.length) {
    acc = func(acc, curList[0]);
    curList = curList[1];
  }
  return acc;
}
