"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.skip = fp_1.curry(function* (amt = 1, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable)[Symbol.iterator]();
    let isDone = false;
    for (let i = 0; i < amt && !isDone; ++i) {
        isDone = iter.next().done;
    }
    if (isDone)
        return;
    while (true) {
        const { done, value } = iter.next();
        if (done)
            return;
        yield value;
    }
});
