"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArgs(func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(void 0, (args.reverse()));
    };
}
exports.reverseArgs = reverseArgs;
