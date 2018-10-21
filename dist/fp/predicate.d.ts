export declare type Predicate = (param: any) => boolean;
export declare const or: (...predicates: Predicate[]) => (param: any) => boolean;
export declare const and: (...predicates: Predicate[]) => (param: any) => boolean;
export declare const xor: (...predicates: Predicate[]) => (param: any) => boolean;
export declare const negate: (p1: Predicate) => (param: any) => boolean;
export declare const toPredicate: (p: (obj: any) => any) => Predicate;
export declare const boolToPredicate: (b: boolean) => Predicate;
