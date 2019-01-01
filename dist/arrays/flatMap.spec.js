"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatMap_1 = require("./flatMap");
const utils_1 = require("../utils");
const iterators_1 = require("../iterators");
describe('flatMap', () => {
    it('Can flatten arrays', () => {
        const fm = flatMap_1.flatMap((x) => iterators_1.collectToArray(utils_1.lazyRange(x)));
        expect(fm([1, 2, 3])).toEqual([0, 0, 1, 0, 1, 2]);
    });
});
