"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const is_1 = require("../is");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.flatten = fp_1.curry(function* (iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    for (const val of iter) {
        if (is_1.isIterable(val)) {
            for (const innerVal of val)
                yield innerVal;
        }
        else {
            yield val;
        }
    }
});
