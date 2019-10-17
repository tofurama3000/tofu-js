import * as Stack from './stack'

describe('Immutable Stack', () => {
  it('can be created', () => {
    expect(Stack.Stack()).toBeTruthy();
  });

  it('can have items pushed', () => {
    const stack = Stack.Stack();
    expect(JSON.stringify(stack.push(1).push(2))).toBe("[2,[1,[]]]");
    expect(JSON.stringify(stack.push(1,2,3))).toBe('[3,[2,[1,[]]]]');
  });

  it('can have items popped', () => {
    const stack = Stack.Stack().push(1,2,3);
    expect(JSON.stringify(stack.pop())).toBe("[2,[1,[]]]");
  });

  it('can have items peeked', () => {
    const stack = Stack.Stack().push(1,2,3,4,5);
    expect(stack.peek()).toBe(5);
    expect(stack.pop().pop().peek()).toBe(3);
  });

  it('can be detected to be empty', () => {
    expect(Stack.Stack().isEmpty()).toBe(true);
    expect(Stack.Stack().push(4).isEmpty()).toBe(false);
    expect(Stack.Stack().push(3).pop().isEmpty()).toBe(true);
  });
})

