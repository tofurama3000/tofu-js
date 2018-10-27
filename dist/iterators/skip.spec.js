"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const skip_1 = require("./skip");
describe('skip', () => {
    it('does skip', () => {
        expect(collectToArray_1.collectToArray(skip_1.skip(4, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([5, 6, 7, 8]);
        expect(collectToArray_1.collectToArray(skip_1.skip(2, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([3, 4, 5, 6, 7, 8]);
        expect(collectToArray_1.collectToArray(skip_1.skip(0, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(collectToArray_1.collectToArray(skip_1.skip(-10, [1, 2, 3, 4, 5, 6, 7, 8]))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
//# sourceMappingURL=skip.spec.js.map