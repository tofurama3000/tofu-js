export const isSet = <T>(obj: any): obj is Set<T> => (Set ? obj instanceof Set : false);
