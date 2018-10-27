export function toArrayOrEmpty<T1 = any>(obj: T1[] | any): T1[] {
  if (Array.isArray(obj)) return obj;
  return [];
}
