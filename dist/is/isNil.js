"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNull_1 = require("./isNull");
const isUndefined_1 = require("./isUndefined");
exports.isNil = (param) => isNull_1.isNull(param) || isUndefined_1.isUndefined(param);
