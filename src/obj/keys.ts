/**
 * Returns both string and symbol keys for an object
 * @param {Object} obj
 * @return Array<string|Symbol>
 */
export function keys(obj: Object) {
  return (Object.keys(obj) as Array<string | Symbol>).concat(Object.getOwnPropertySymbols(obj));
}

/**
 * Returns all values for an object (from both strings and symbol keys)
 * @param {Object} obj
 * @return any[]
 */
export function values(obj: Object) {
  return keys(obj).map((key: any) => obj[key])
}
