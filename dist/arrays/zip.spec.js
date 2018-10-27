"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zip_1 = require("./zip");
describe('zip', () => {
    it('works with two arrays', () => {
        expect(zip_1.zip([1, 2, 3, 4], [1, -1, 3])).toEqual([[1, 1], [2, -1], [3, 3], [4, null]]);
    });
    it('works with many arrays', () => {
        expect(zip_1.zip([1, 2, 3, 4], [1, -1, 3], [0, 10, null, 3])).toEqual([
            [1, 1, 0],
            [2, -1, 10],
            [3, 3, null],
            [4, null, 3]
        ]);
    });
});
//# sourceMappingURL=zip.spec.js.map