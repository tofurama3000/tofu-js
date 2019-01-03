"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const utils_1 = require("../utils");
exports.copyInto = index_1.fp.curry((source, target) => {
    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
    return target;
});
exports.copyIntoDeep = index_1.fp.curry((source, target) => {
    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = utils_1.cloneDeep(source[prop]);
        }
    }
    return target;
});
