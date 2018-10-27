export interface Range {
    (): number[];
    (end: number): number[];
    (start: number, end: number): number[];
    (start: number, end: number, step: number): number[];
}
export declare const range: Range;
