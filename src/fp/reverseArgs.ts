export function reverseArgs(func) {
  return (...args) => {
    return func(...args.reverse());
  };
}
