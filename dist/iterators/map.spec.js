"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
const collectToArray_1 = require("./collectToArray");
describe('map', () => {
    it('works on iterables', () => {
        const m = map_1.map(x => x + 1);
        expect(collectToArray_1.collectToArray(m([1, 2, 3, 4]))).toEqual([2, 3, 4, 5]);
        expect(collectToArray_1.collectToArray(m((function* () {
            yield 1;
            yield 2;
            yield 3;
        })()))).toEqual([2, 3, 4]);
    });
});
