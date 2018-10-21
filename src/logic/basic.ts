export const and = (arr: boolean[]) => arr.reduce((a, b) => a && b, true) && !!arr.length;
export const or = (arr: boolean[]) => arr.reduce((a, b) => a || b, false);
export const xor = (arr: boolean[]) => arr.reduce((a, b) => a + +b, 0) === 1;
export const negate = (arr: boolean[] | boolean) => (Array.isArray(arr) ? arr.map(b => !b) : !arr);
