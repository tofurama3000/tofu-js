"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
const iterators_1 = require("../iterators");
exports.entries = (param) => {
    if (param instanceof Map) {
        return iterators_1.collectToArray(param.entries());
    }
    else if (param instanceof Set) {
        return iterators_1.collectToArray(param.entries());
    }
    else if (is_1.isObject(param)) {
        if (is_1.isFunction(param.entries)) {
            const paramEntries = param.entries();
            if (is_1.isIterable(paramEntries))
                return iterators_1.collectToArray(paramEntries);
        }
        return Object.entries(param);
    }
    else if (is_1.isArray(param)) {
        return param.map((v, i) => [i, v]);
    }
    else {
        return [];
    }
};
