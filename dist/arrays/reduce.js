"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.reduce = fp_1.curry((func, start, array) => toArrayOrEmpty_1.toArrayOrEmpty(array).reduce(func, start));
