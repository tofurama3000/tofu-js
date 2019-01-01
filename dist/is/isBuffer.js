"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBuffer = (obj) => {
    return Buffer ? Buffer.isBuffer(obj) : false;
};
