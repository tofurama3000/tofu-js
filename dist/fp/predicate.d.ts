export declare var and: () => (param: any) => boolean;
export declare var or: () => (param: any) => any;
export declare var xor: () => (param: any) => boolean;
export declare var negate: (p1: any) => (param: any) => boolean;
export declare var toPredicate: (p: any) => (param: any) => boolean;
export declare var boolToPredicate: (b: any) => () => any;
