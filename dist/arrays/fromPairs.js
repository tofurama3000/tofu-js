"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
exports.fromPairs = (pairs) => {
    return toArrayOrEmpty_1.toArrayOrEmpty(pairs)
        .map(([key, val]) => ({ [key]: val }))
        .reduce((a, c) => Object.assign(a, c), {});
};
//# sourceMappingURL=fromPairs.js.map