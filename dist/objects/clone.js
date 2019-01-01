"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
const arrays_1 = require("../arrays");
const iterators_1 = require("../iterators");
function cloneShallow(obj) {
    if (is_1.isArray(obj))
        return obj.slice(0);
    else if (is_1.isBuffer(obj))
        return Buffer.from(obj);
    else if (is_1.isSet(obj))
        return iterators_1.reduce((a, c) => a.add(c), new Set(), obj.entries());
    else if (is_1.isMap(obj))
        return iterators_1.reduce((a, [key, val]) => a.set(key, val), new Map(), obj.entries());
    else if (is_1.isObject(obj))
        return Object.assign({}, obj);
    else
        return obj;
}
exports.cloneShallow = cloneShallow;
function cloneDeep(obj) {
    if (is_1.isArray(obj))
        return arrays_1.map(cloneDeep, obj);
    else if (is_1.isBuffer(obj))
        return Buffer.from(obj);
    else if (is_1.isSet(obj))
        return iterators_1.reduce((a, c) => a.add(cloneDeep(c)), new Set(), obj.entries());
    else if (is_1.isMap(obj))
        return iterators_1.reduce((a, [key, val]) => a.set(cloneDeep(key), cloneDeep(val)), new Map(), obj.entries());
    else if (is_1.isObject(obj)) {
        const copy = {};
        // tslint:disable
        for (const prop in obj) {
            copy[prop] = cloneDeep(obj[prop]);
        }
        // tslint:enable
        return copy;
    }
    else
        return obj;
}
exports.cloneDeep = cloneDeep;
