"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const is_1 = require("../is");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.flatMap = fp_1.curry(function* (func, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    for (const val of iter) {
        const newIterable = func(val);
        if (is_1.isIterable(newIterable)) {
            for (const newVal of newIterable)
                yield newVal;
        }
        else {
            yield newIterable;
        }
    }
});
//# sourceMappingURL=flatMap.js.map