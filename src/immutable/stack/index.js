/**
 * @module immutable:Stack
 */

const isStackSym = Symbol('isStack');

/**
 * Creates an immutable Stack
 * @returns {Stack} a stack
 */
export function Stack() {
  return addStackFunctions([]);
}

/**
 * Pushes items onto the stack 
 * 
 * Note: They will be popped off in reverse order
 * 
 * @param {Stack} stack Stack to push to
 * @param  {...any} items Items to push
 * @returns {Stack} A new stack with the items pushed
 */
export function push(stack, ...items) {
  let curStack = stack;
  for (const item of items) {
    curStack = addStackFunctions([item, curStack]);
  }
  return curStack;
}

/**
 * Pops the top item from the stack
 * 
 * @param {Stack} stack Stack to pop from 
 * @returns {Stack} A new stack with the top popped
 */
export function pop(stack) {
  return stack.length ? stack[1] : stack;
}

/**
 * Peeks at the first item on the stack
 * 
 * @param {Stack} stack Stack to peek into
 * @returns {any} The first item on the stack or undefined if it is empty
 */
export function peek(stack) {
  return stack.length ? stack[0] : undefined;
}

/**
 * Checks a stack to see if it's empty
 * 
 * @param {Stack} stack Stack to check
 * @returns {boolean} Whether or not the stack is empty
 */
export function isEmpty(stack) {
  return !stack.length;
}

/**
 * Checks a stack to see if an object is an immutable stack
 * 
 * @param {any} obj The object to check
 * @returns {boolean} Whether or not it is an immutable stack
 */
export function isStack(obj) {
  return typeof obj === 'object' && !!obj && !!obj[isStackSym];
}

function addStackFunctions(stack) {
  stack[isStackSym] = true;
  stack.push = (...items) => push(stack, ...items);
  stack.pop = () => pop(stack);
  stack.peek = () => peek(stack);
  stack.isEmpty = () => isEmpty(stack);
  stack.__proto__ = Object;
  return stack;
}
