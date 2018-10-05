"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverseArgs_1 = require("./reverseArgs");
function reverseCurry(func) {
    var curryImpl = function (provided_args) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var concat_args = provided_args.concat(args);
        if (concat_args.length < func.length) {
            return curryImpl(concat_args);
        }
        return reverseArgs_1.reverseArgs(func).apply(void 0, concat_args);
    }; };
    return curryImpl([]);
}
exports.reverseCurry = reverseCurry;
