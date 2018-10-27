"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.chunk = fp_1.curry((size, array) => {
    const arr = toArrayOrEmpty_1.toArrayOrEmpty(array);
    const output = [];
    let chunk = [];
    for (let elem of arr) {
        if (chunk.length >= size) {
            output.push(chunk);
            chunk = [];
        }
        chunk.push(elem);
    }
    if (chunk.length) {
        output.push(chunk);
    }
    return output;
});
//# sourceMappingURL=chunk.js.map