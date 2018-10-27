"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chunk_1 = require("./chunk");
const collectToArray_1 = require("./collectToArray");
describe('chunk', () => {
    it('can chunk arrays', () => {
        const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(collectToArray_1.collectToArray(chunk_1.chunk(3, arr1))).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        expect(collectToArray_1.collectToArray(chunk_1.chunk(2, arr1))).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
    });
    it('can chunk generators', () => {
        const gen = function* () {
            return yield* [1, 2, 3, 4, 5, 6, 7, 8, 9];
        };
        expect(collectToArray_1.collectToArray(chunk_1.chunk(3, gen()))).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        expect(collectToArray_1.collectToArray(chunk_1.chunk(2, gen()))).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
    });
    it('is empty for non-iterables', () => {
        expect(collectToArray_1.collectToArray(chunk_1.chunk(2, 5))).toEqual([]);
    });
});
//# sourceMappingURL=chunk.spec.js.map