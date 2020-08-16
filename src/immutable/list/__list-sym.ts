import { Predicate } from '../../commonTypes';

export const isListSym = Symbol('isList');

export interface IList<T> extends Iterable<T> {
  add(elem: T): IList<T>;
  concat(list: IList<T>): IList<T>;
  count(): number;
  drop(n: number): IList<T>;
  dropFirst(): IList<T>;
  equals(list: IList<T>): IList<T>;
  first(): T;
  isEmpty(): boolean;
  map<G>(func: (T) => G): IList<G>;
  reduce<G>(func: (G, T) => G): IList<T>;
  rest(): IList<T>;
  reverse(): IList<T>;
  split(number): IList<T>[];
  splitOn(f: Predicate<T>): IList<T>[];
  toArray(): T[];
  length: number;
}

export type List<T> = ([T, List<T>] | []) & IList<T>;
export type ListBase<T> = [T, ListBase<T>] | [] | [T, List<T>] | List<T>;
