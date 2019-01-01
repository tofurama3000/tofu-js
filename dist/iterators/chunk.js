"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.chunk = fp_1.curry(function* (size, iterable) {
    const iter = toIterableOrEmpty_1.toIterableOrEmpty(iterable);
    let chunks = [];
    for (const elem of iter) {
        if (chunks.length >= size) {
            yield chunks;
            chunks = [];
        }
        chunks.push(elem);
    }
    if (chunks.length) {
        yield chunks;
    }
});
