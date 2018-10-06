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
