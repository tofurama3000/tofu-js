"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.limit = fp_1.curry(function* (max, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    let count = 0;
    for (const val of iter) {
        if (count++ < (max | 0)) {
            yield val;
        }
        else {
            break;
        }
    }
});
//# sourceMappingURL=limit.js.map