"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.map = fp_1.curry(function* (func, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    for (const val of iter)
        yield func(val);
});
