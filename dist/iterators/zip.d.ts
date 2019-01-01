export interface ZipInterface {
    (): ZipInterface;
    (a: Iterable<any>): (b: Iterable<any>) => Iterable<any>;
    (a: Iterable<any>, b: Iterable<any>, ...args: Array<Iterable<any>>): Iterable<any>;
}
export declare const zip: ZipInterface;
