"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
exports.fromPairs = function* (pairs) {
    const p = toIterableOrEmpty_1.toIterableOrEmpty(pairs);
    let obj = {};
    for (const [key, val] of p) {
        obj = Object.assign(obj, { [key]: val });
    }
    yield obj;
};
//# sourceMappingURL=fromPairs.js.map