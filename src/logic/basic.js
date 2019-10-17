export const and = (...arr) => arr.reduce((a, b) => a && b, true) && !!arr.length;
export const or = (...arr) => arr.reduce((a, b) => a || b, false);
export const xor = (...arr) => arr.reduce((a, b) => a + +b, 0) === 1;
export const negate = b => !b;
export const negateAll = (...arr) => arr.map(b => negate(b));
