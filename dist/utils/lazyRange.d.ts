export interface LazyRange {
    (): Iterable<number>;
    (end: number): Iterable<number>;
    (start: number, end: number): Iterable<number>;
    (start: number, end: number, step: number): Iterable<number>;
}
export declare const lazyRange: LazyRange;
