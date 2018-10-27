export interface Curried1<A1, R> {
  (): Curried1<A1, R>;
  (a1: A1, ...args: any[]): R;
}

export interface Curried2<A1, A2, R> {
  (): Curried2<A1, A2, R>;
  (a1: A1): Curried1<A2, R>;
  (a1: A1, a2: A2, ...args: any[]): R;
}

export interface Curried3<A1, A2, A3, R> {
  (): Curried3<A1, A2, A3, R>;
  (a1: A1): Curried2<A2, A3, R>;
  (a1: A1, a2: A2): Curried1<A3, R>;
  (a1: A1, a2: A2, a3: A3, ...args: any[]): R;
}

export interface Curried4<A1, A2, A3, A4, R> {
  (): Curried4<A1, A2, A3, A4, R>;
  (a1: A1): Curried3<A2, A3, A4, R>;
  (a1: A1, a2: A2): Curried2<A3, A4, R>;
  (a1: A1, a2: A2, a3: A3): Curried1<A4, R>;
  (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]): R;
}

export interface Curried5<A1, A2, A3, A4, A5, R> {
  (): Curried5<A1, A2, A3, A4, A5, R>;
  (a1: A1): Curried4<A2, A3, A4, A5, R>;
  (a1: A1, a2: A2): Curried3<A3, A4, A5, R>;
  (a1: A1, a2: A2, a3: A3): Curried2<A4, A5, R>;
  (a1: A1, a2: A2, a3: A3, a4: A4): Curried1<A5, R>;
  (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, ...args: any[]): R;
}

export interface Curried {
  <A1, R>(func: (a1: A1) => R): Curried1<A1, R>;
  <A1, A2, R>(func: (a1: A1, a2: A2) => R): Curried2<A1, A2, R>;
  <A1, A2, A3, R>(func: (a1: A1, a2: A2, a3: A3) => R): Curried3<A1, A2, A3, R>;
  <A1, A2, A3, A4, R>(func: (a1: A1, a2: A2, a3: A3, a4: A4) => R): Curried4<A1, A2, A3, A4, R>;
  <A1, A2, A3, A4, A5, R>(func: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R): Curried5<
    A1,
    A2,
    A3,
    A4,
    A5,
    R
  >;

  (func: (...a: any[]) => any): (...args: any[]) => any;
}

export const curry: Curried = func => {
  const curryImpl = (providedArgs: any[]) => (...args: any[]) => {
    const concatArgs = providedArgs.concat(args);
    if (concatArgs.length < func.length) {
      return curryImpl(concatArgs);
    }
    return func(...concatArgs);
  };

  return curryImpl([]);
};
