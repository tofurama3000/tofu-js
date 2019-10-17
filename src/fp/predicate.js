export const and = (...predicates) => param =>
  [...predicates].reduce((a, p) => a && p(param), true) && !!predicates.length;

export const or = (...predicates) => param =>
  [...predicates].reduce((a, p) => a || p(param), false);

export const xor = (...predicates) => param =>
  [...predicates].map(p => +p(param)).reduce((a, c) => a + c, 0) === 1;

export const negate = p1 => param => !p1(param);

export const toPredicate = p => param => !!p(param);
export const boolToPredicate = b => () => b;
