"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = func => {
    const curryImpl = (providedArgs) => (...args) => {
        const concatArgs = providedArgs.concat(args);
        if (concatArgs.length < func.length) {
            return curryImpl(concatArgs);
        }
        return func(...concatArgs);
    };
    return curryImpl([]);
};
//# sourceMappingURL=curry.js.map