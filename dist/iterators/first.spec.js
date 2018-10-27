"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const first_1 = require("./first");
describe('first', () => {
    it('returns just the first element or nothing', () => {
        expect(collectToArray_1.collectToArray(first_1.first([0, 3]))).toEqual([0]);
        expect(collectToArray_1.collectToArray(first_1.first([]))).toEqual([]);
    });
});
//# sourceMappingURL=first.spec.js.map