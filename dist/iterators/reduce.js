"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.reduce = fp_1.curry(function (func, start, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    let accumulated = start;
    for (const val of iter) {
        accumulated = func(accumulated, val);
    }
    return accumulated;
});
