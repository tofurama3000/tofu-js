"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.skip = fp_1.curry((amt, array) => toArrayOrEmpty_1.toArrayOrEmpty(array).splice(amt));
