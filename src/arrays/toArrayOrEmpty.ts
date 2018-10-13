export function toArrayOrEmpty(obj: any): any[] {
  if (Array.isArray(obj)) return obj;
  return [];
}
