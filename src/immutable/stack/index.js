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

function addStackFunctions(stack) {
  stack.push = (...items) => push(stack, ...items);
  stack.pop = () => pop(stack);
  stack.peek = () => peek(stack);
  stack.isEmpty = () => isEmpty(stack);
  return stack;
}
