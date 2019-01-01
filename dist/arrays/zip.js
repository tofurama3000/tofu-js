"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
exports.zip = fp_1.curry((arrLeft, arrRight, ...moreArrays) => {
    const arrays = [arrLeft, arrRight, ...moreArrays];
    const maxLen = Math.max(...arrays.map(a => a.length));
    const res = [];
    for (let i = 0; i < maxLen; ++i) {
        res.push(arrays.map(a => (i < a.length ? a[i] : null)));
    }
    return res;
});
