"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
const limit_1 = require("./limit");
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.collectToArray = (iterable, max = Infinity) => is_1.isInfinite(max)
    ? [...toIterableOrEmpty_1.toIterableOrEmpty(iterable)]
    : exports.collectToArray(limit_1.limit(max, toIterableOrEmpty_1.toIterableOrEmpty(iterable)));
//# sourceMappingURL=collectToArray.js.map