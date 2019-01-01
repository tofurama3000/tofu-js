"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
const fp_1 = require("../fp");
exports.join = fp_1.curry((separator, arr) => toArrayOrEmpty_1.toArrayOrEmpty(arr).join(separator));
