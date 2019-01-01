"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.limit = fp_1.curry((max, array) => toArrayOrEmpty_1.toArrayOrEmpty(array).splice(0, max));
