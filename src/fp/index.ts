export function curry(func: Function): Function {
  const curryImpl = (provided_args: any[]) => (...args: any[]) => {
    const concat_args = provided_args.concat(args);
    if (concat_args.length < func.length) {
      return curryImpl(concat_args);
    }
    return func(...concat_args);
  };

  return curryImpl([]);
}

export function reverseArgs(func) {
  return (...args) => {
    return func(...args.reverse());
  };
}

export function reverseCurry(func) {
  const curryImpl = provided_args => (...args) => {
    const concat_args = provided_args.concat(args);
    if (concat_args.length < func.length) {
      return curryImpl(concat_args);
    }
    return reverseArgs(func)(...concat_args);
  };

  return curryImpl([]);
}

export * from './predicate';
