"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toArrayOrEmpty(obj) {
    if (Array.isArray(obj))
        return obj;
    return [];
}
exports.toArrayOrEmpty = toArrayOrEmpty;
