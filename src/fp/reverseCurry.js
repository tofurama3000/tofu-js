import { reverseArgs } from './reverseArgs';

export const reverseCurry = func => {
  const curryImpl = providedArgs => (...args) => {
    const concatArgs = providedArgs.concat(args);
    if (concatArgs.length < func.length) {
      return curryImpl(concatArgs);
    }
    return reverseArgs(func)(...concatArgs);
  };

  return curryImpl([]);
};
