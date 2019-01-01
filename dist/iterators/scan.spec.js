"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scan_1 = require("./scan");
const collectToArray_1 = require("./collectToArray");
describe('scan', () => {
    it('works on iterables', () => {
        const s = scan_1.scan((a, b) => a + b, 0);
        expect(collectToArray_1.collectToArray(s([1, 2, 3, 4]))).toEqual([1, 3, 6, 10]);
        expect(collectToArray_1.collectToArray(s((function* () {
            yield 1;
            yield -1;
            yield 3;
        })()))).toEqual([1, 0, 3]);
    });
});
