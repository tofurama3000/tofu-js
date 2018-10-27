"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.map = fp_1.curry((func, array) => toArrayOrEmpty_1.toArrayOrEmpty(array).map(func));
//# sourceMappingURL=map.js.map