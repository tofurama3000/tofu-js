"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseArgs_1 = require("./reverseArgs");
exports.reverseCurry = func => {
    const curryImpl = providedArgs => (...args) => {
        const concatArgs = providedArgs.concat(args);
        if (concatArgs.length < func.length) {
            return curryImpl(concatArgs);
        }
        return reverseArgs_1.reverseArgs(func)(...concatArgs);
    };
    return curryImpl([]);
};
