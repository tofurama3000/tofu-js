"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const flatMap_1 = require("./flatMap");
const utils_1 = require("../utils");
describe('flatMap', () => {
    it('Can flatten iterables', () => {
        const fm = flatMap_1.flatMap((x) => utils_1.lazyRange(x));
        expect(collectToArray_1.collectToArray(fm([1, 2, 3]))).toEqual([0, 0, 1, 0, 1, 2]);
    });
});
