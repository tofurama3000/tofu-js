/**
 * Returns both string and symbol keys for an object
 * @param {Object} obj
 * @return Array<string|Symbol>
 */
export function keys(obj: Object) {
  return (Object.keys(obj) as Array<string | Symbol>).concat(Object.getOwnPropertySymbols(obj));
}
