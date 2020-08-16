/**
 * An immutable stack
 * @module immutable:Stack
 */

import { Nillable } from '../../commonTypes';

const isStackSym = Symbol('isStack');

export interface IStack<T> {
  [isStackSym]: true;
  length: number;
  push(...items: T[]): IStack<T>;
  pop(): IStack<T>;
  peek(): T;
  isEmpty(): boolean;
}

/**
 * Creates an immutable Stack
 * @returns {Stack} a stack
 */
export function Stack<T>(): IStack<T> {
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
export function push<T>(stack: IStack<T>, ...items: T[]): IStack<T> {
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
export function pop<T>(stack: IStack<T>): IStack<T> {
  return stack.length ? stack[1] : stack;
}

/**
 * Peeks at the first item on the stack
 *
 * @param {Stack} stack Stack to peek into
 * @returns {any} The first item on the stack or undefined if it is empty
 */
export function peek<T>(stack: IStack<T>): Nillable<T> {
  return stack.length ? stack[0] : undefined;
}

/**
 * Checks a stack to see if it's empty
 *
 * @param {Stack} stack Stack to check
 * @returns {boolean} Whether or not the stack is empty
 */
export function isEmpty<T>(stack: IStack<T>): boolean {
  return !stack.length;
}

/**
 * Checks a stack to see if an object is an immutable stack
 *
 * @param {any} obj The object to check
 * @returns {boolean} Whether or not it is an immutable stack
 */
export function isStack(obj: any): obj is IStack<any> {
  return typeof obj === 'object' && !!obj && !!obj[isStackSym];
}

function addStackFunctions<T>(stack): IStack<T> {
  stack[isStackSym] = true;
  stack.push = (...items) => push(stack, ...items);
  stack.pop = () => pop(stack);
  stack.peek = () => peek(stack);
  stack.isEmpty = () => isEmpty(stack);
  stack.__proto__ = Object;
  return stack;
}
