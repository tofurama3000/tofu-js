"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.takeWhile = fp_1.curry((whileFunc, array) => {
    const arr = toArrayOrEmpty_1.toArrayOrEmpty(array);
    const res = [];
    for (const val of arr) {
        if (whileFunc(val))
            res.push(val);
        else
            return res;
    }
    return res;
});
//# sourceMappingURL=takeWhile.js.map