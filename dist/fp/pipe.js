"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
exports.pipe = (paramOrFunc, ...functions) => {
    if (is_1.isFunction(paramOrFunc)) {
        return chain(paramOrFunc, ...functions);
    }
    return chain(...functions)(paramOrFunc);
};
function chain(...funcs) {
    return (param) => {
        let lastVal = param;
        for (const func of funcs) {
            lastVal = func(lastVal);
        }
        return lastVal;
    };
}
//# sourceMappingURL=pipe.js.map