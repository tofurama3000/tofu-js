"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = (...arr) => arr.reduce((a, b) => a && b, true) && !!arr.length;
exports.or = (...arr) => arr.reduce((a, b) => a || b, false);
exports.xor = (...arr) => arr.reduce((a, b) => a + +b, 0) === 1;
exports.negate = (b) => !b;
exports.negateAll = (...arr) => arr.map(b => exports.negate(b));
//# sourceMappingURL=basic.js.map