"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = require("./isObject");
const isFunction_1 = require("./isFunction");
exports.isIterable = (param) => isObject_1.isObject(param) && isFunction_1.isFunction(param[Symbol.iterator]);
//# sourceMappingURL=isIterable.js.map