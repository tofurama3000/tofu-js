"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../is/index");
const index_2 = require("../arrays/index");
const index_3 = require("../iterators/index");
function cloneShallow(obj) {
    if (index_1.isArray(obj))
        return obj.slice(0);
    else if (index_1.isBuffer(obj))
        return Buffer.from(obj);
    else if (index_1.isSet(obj))
        return index_3.reduce((a, c) => a.add(c), new Set(), obj.entries());
    else if (index_1.isMap(obj))
        return index_3.reduce((a, [key, val]) => a.set(key, val), new Map(), obj.entries());
    else if (index_1.isObject(obj))
        return Object.assign({}, obj);
    else
        return obj;
}
exports.cloneShallow = cloneShallow;
function cloneDeep(obj) {
    if (index_1.isArray(obj))
        return index_2.map(cloneDeep, obj);
    else if (index_1.isBuffer(obj))
        return Buffer.from(obj);
    else if (index_1.isSet(obj))
        return index_3.reduce((a, c) => a.add(cloneDeep(c)), new Set(), obj.entries());
    else if (index_1.isMap(obj))
        return index_3.reduce((a, [key, val]) => a.set(cloneDeep(key), cloneDeep(val)), new Map(), obj.entries());
    else if (index_1.isObject(obj)) {
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
