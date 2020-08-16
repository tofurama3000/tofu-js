/**
 * @module fp:curry
 * @ignore
 */

export interface CF1<T1, R> {
  (t1: T1, ...args: any[]): R;
}

export interface CF2<T1, T2, R> {
  (t1: T1): CF1<T2, R>;
  (t1: T1, t2: T2, ...args: any[]): R;
}

export interface CF3<T1, T2, T3, R> {
  (t1: T1): CF2<T2, T3, R>;
  (t1: T1, t2: T2): CF1<T3, R>;
  (t1: T1, t2: T2, t3: T3, ...args: any[]): R;
}

export interface CF4<T1, T2, T3, T4, R> {
  (t1: T1): CF3<T2, T3, T4, R>;
  (t1: T1, t2: T2): CF2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): CF1<T4, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, ...args: any[]): R;
}

export interface CF5<T1, T2, T3, T4, T5, R> {
  (t1: T1): CF4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): CF3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): CF2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CF1<T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, ...args: any[]): R;
}

export interface CF6<T1, T2, T3, T4, T5, T6, R> {
  (t1: T1): CF5<T2, T3, T4, T5, T6, R>;
  (t1: T1, t2: T2): CF4<T3, T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3): CF3<T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CF2<T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CF1<T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, ...args: any[]): R;
}

export interface CF7<T1, T2, T3, T4, T5, T6, T7, R> {
  (t1: T1): CF6<T2, T3, T4, T5, T6, T7, R>;
  (t1: T1, t2: T2): CF5<T3, T4, T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3): CF4<T4, T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CF3<T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CF2<T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CF1<T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, ...args: any[]): R;
}

export interface CurryFn {
  <T1, R>(func: (t1: T1) => R): CF1<T1, R>;
  <T1, T2, R>(func: (t1: T1, t2: T2) => R): CF2<T1, T2, R>;
  <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CF3<T1, T2, T3, R>;
  <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CF4<T1, T2, T3, T4, R>;
  <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CF5<
    T1,
    T2,
    T3,
    T4,
    T5,
    R
  >;
  <T1, T2, T3, T4, T5, T6, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R): CF6<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    R
  >;
  <T1, T2, T3, T4, T5, T6, T7, R>(
    func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
  ): CF7<T1, T2, T3, T4, T5, T6, T7, R>;
  (func: (...args: any[]) => any): (...args: any[]) => any;
}

/**
 * Auto-curries a function
 * @param {function} func Function to auto-curry
 * @returns {function}
 */
export const curry: CurryFn = (func: Function) => {
  const curryImpl = providedArgs => (...args) => {
    const concatArgs = providedArgs.concat(args);
    if (concatArgs.length < func.length) {
      return curryImpl(concatArgs);
    }
    return func(...concatArgs);
  };

  return curryImpl([]);
};
