"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const zip_1 = require("./zip");
describe('zip', () => {
    it('works with two iterables', () => {
        expect(collectToArray_1.collectToArray(zip_1.zip([1, 2, 3, 4], (function* () {
            yield 1;
            yield -1;
            yield 3;
        })()))).toEqual([[1, 1], [2, -1], [3, 3], [4, null]]);
    });
    it('works with many iterables', () => {
        expect(collectToArray_1.collectToArray(zip_1.zip([1, 2, 3, 4], (function* () {
            yield 1;
            yield -1;
            yield 3;
        })(), [0, 10, null, 3]))).toEqual([[1, 1, 0], [2, -1, 10], [3, 3, null], [4, null, 3]]);
    });
});
