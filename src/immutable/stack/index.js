const isStackSym = Symbol('isStack');

export function Stack() {
  return addStackFunctions([]);
}

export function push(stack, ...items) {
  let curStack = stack;
  for (const item of items) {
    curStack = addStackFunctions([item, curStack]);
  }
  return curStack;
}

export function pop(stack) {
  return stack.length ? stack[1] : stack;
}

export function peek(stack) {
  return stack.length ? stack[0] : undefined;
}

export function isEmpty(stack) {
  return !stack.length;
}

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
