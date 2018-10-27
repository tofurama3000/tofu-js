"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = require("./tap");
const collectToArray_1 = require("./collectToArray");
describe('tap', () => {
    it('works on iterables', () => {
        let arr = [];
        const t = tap_1.tap((v) => arr.push(v));
        collectToArray_1.collectToArray(t([1, 2, 3, 4]));
        expect(arr).toEqual([1, 2, 3, 4]);
        arr = [];
        collectToArray_1.collectToArray(t((function* () {
            yield 1;
            yield -1;
            yield 3;
        })()));
        expect(arr).toEqual([1, -1, 3]);
    });
});
//# sourceMappingURL=tap.spec.js.map