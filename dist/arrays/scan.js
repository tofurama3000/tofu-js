"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.scan = fp_1.curry((func, start, array) => {
    let accumulated = start;
    return toArrayOrEmpty_1.toArrayOrEmpty(array).map((elem) => {
        accumulated = func(accumulated, elem);
        return accumulated;
    });
});
