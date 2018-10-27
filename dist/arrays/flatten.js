"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.flatten = fp_1.curry(array => [].concat(...toArrayOrEmpty_1.toArrayOrEmpty(array)));
//# sourceMappingURL=flatten.js.map