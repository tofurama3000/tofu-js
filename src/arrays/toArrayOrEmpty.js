export function toArrayOrEmpty(obj) {
  if (Array.isArray(obj)) return obj;
  return [];
}
