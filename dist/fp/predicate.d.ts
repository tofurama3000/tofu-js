export declare type Predicate = (param: any) => boolean;
export declare const or: (p1: Predicate, p2: Predicate, ...pRest: Predicate[]) => (param: any) => boolean;
export declare const and: (p1: Predicate, p2: Predicate, ...pRest: Predicate[]) => (param: any) => boolean;
export declare const xor: (p1: Predicate, p2: Predicate, ...pRest: any[]) => (param: any) => boolean;
export declare const negate: (p1: Predicate) => (param: any) => boolean;
export declare const toPredicate: (p1: (obj: any) => any) => Predicate;
