"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
const fp_1 = require("../fp");
const collectToArray_1 = require("./collectToArray");
exports.join = fp_1.curry(function* (separator, iterable) {
    yield collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty(iterable)).join(separator);
});
