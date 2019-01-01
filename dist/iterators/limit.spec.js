"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('limit', () => {
    it('works on iterables', () => {
        expect(index_1.collectToArray(index_1.limit(2, [1, 2, 3, 4]))).toEqual([1, 2]);
        expect(index_1.collectToArray(index_1.limit(2, (function* () {
            yield 1;
            yield -1;
            yield 3;
        })()))).toEqual([1, -1]);
    });
});
