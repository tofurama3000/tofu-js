export declare type PipedFunction = (p: any) => any;
export interface PipeFunc {
    (func: PipedFunction, ...functions: Array<(p: any) => any>): (param: any) => any;
    (param: any, func: PipedFunction, ...functions: Array<(p: any) => any>): any;
}
export declare const pipe: PipeFunc;
