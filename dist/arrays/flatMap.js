"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("../fp");
const toArrayOrEmpty_1 = require("./toArrayOrEmpty");
const map_1 = require("./map");
const flatten_1 = require("./flatten");
exports.flatMap = fp_1.curry((func, array) => fp_1.pipe(toArrayOrEmpty_1.toArrayOrEmpty(array), map_1.map(func), flatten_1.flatten));
