"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const filter_1 = require("./filter");
describe('filter', () => {
    it('works on iterables', () => {
        const func = (x) => x % 2 === 1;
        expect(collectToArray_1.collectToArray(filter_1.filter(func, [1, 2, 3, 4, 5, 6, 7, 8, 9]))).toEqual([1, 3, 5, 7, 9]);
    });
});
