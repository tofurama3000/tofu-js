export type Predicate = (param: any) => boolean;

export const or = (...predicates: Predicate[]) => (param: any) =>
  [...predicates].reduce((a, p) => a || p(param), false);

export const and = (...predicates: Predicate[]) => (param: any) =>
  [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;

export const xor = (...predicates) => (param: any) =>
  [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

export const negate = (p1: Predicate) => (param: any) => !p1(param);

export const toPredicate = (p1: (obj: any) => any): Predicate => (param: any) => !!p1(param);
