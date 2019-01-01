"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
const fp_1 = require("../fp");
exports.take = fp_1.curry(function* (limit, iterable) {
    let i = 0;
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    for (const v of iter) {
        if (i++ < limit) {
            yield v;
        }
        else {
            return;
        }
    }
});
