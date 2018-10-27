"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
function toIterableOrEmpty(param) {
    if (!is_1.isIterable(param))
        return [];
    return param;
}
exports.toIterableOrEmpty = toIterableOrEmpty;
//# sourceMappingURL=toIterableOrEmpty.js.map