"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArgs(func) {
    return (...args) => {
        return func(...args.reverse());
    };
}
exports.reverseArgs = reverseArgs;
//# sourceMappingURL=reverseArgs.js.map