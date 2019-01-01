export const isMap = <K, V>(obj: any): obj is Map<K, V> => (Map ? obj instanceof Map : false);
