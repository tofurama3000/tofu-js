export type Predicate = (param: any) => boolean;

export const or = (p1: Predicate, p2: Predicate, ...pRest: Predicate[]) => (param: any) =>
  [p1, p2, ...pRest].reduce((a, p) => a || p(param), false);

export const and = (p1: Predicate, p2: Predicate, ...pRest: Predicate[]) => (param: any) =>
  [p1, p2, ...pRest].reduce((a, p) => a && p(param), true);

export const xor = (p1: Predicate, p2: Predicate, ...pRest) => (param: any) =>
  [p1, p2, ...pRest].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

export const negate = (p1: Predicate) => (param: any) => !p1(param);

export const toPredicate = (p1: (obj: any) => any): Predicate => (param: any) => !!p1(param);
