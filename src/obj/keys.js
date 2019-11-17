/**
 * Returns both string and symbol keys for an object
 * @param {Object} obj 
 * @return Array<string|Symbol>
 */
export function keys(obj) {
  return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj))
}