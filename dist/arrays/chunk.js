"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.chunk = fp_1.curry((size, array) => {
    const arr = toArrayOrEmpty_1.toArrayOrEmpty(array);
    const output = [];
    let chnk = [];
    for (const elem of arr) {
        if (chnk.length >= size) {
            output.push(chnk);
            chnk = [];
        }
        chnk.push(elem);
    }
    if (chnk.length) {
        output.push(chnk);
    }
    return output;
});
