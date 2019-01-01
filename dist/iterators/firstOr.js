"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
exports.firstOr = fp_1.curry((defaultValue, iterable) => {
    for (const v of iterable) {
        return v;
    }
    return defaultValue;
});
