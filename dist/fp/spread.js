"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
exports.spread = curry_1.curry((func, args) => func(...args));
