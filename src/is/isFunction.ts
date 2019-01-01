export const isFunction = (param: any): param is (...args) => any | void =>
  typeof param === 'function';
