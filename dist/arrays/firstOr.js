"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
const fp_1 = require("../fp");
exports.firstOr = fp_1.curry((defaultValue, array) => {
    const arr = toArrayOrEmpty_1.toArrayOrEmpty(array);
    return arr.length ? arr[0] : defaultValue;
});
