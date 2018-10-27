export interface ZipInterface {
    (): ZipInterface;
    (a: any[]): (b: any[]) => any[];
    (a: any[], b: any[], ...args: any[][]): any[];
}
export declare const zip: ZipInterface;
