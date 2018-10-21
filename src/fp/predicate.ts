export type Predicate = (param: any) => boolean;

export const and = (...predicates: Predicate[]) => (param: any) =>
  [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;

export const or = (...predicates: Predicate[]) => (param: any) =>
  [...predicates].reduce((a, p) => a || p(param), false);

export const xor = (...predicates: Predicate[]) => (param: any) =>
  [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

export const negate = (p1: Predicate) => (param: any) => !p1(param);

export const toPredicate = (p: (obj: any) => any): Predicate => (param: any) => !!p(param);
export const boolToPredicate = (b: boolean): Predicate => () => b;
