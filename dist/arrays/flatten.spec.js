"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = require("./flatten");
describe('flatten', () => {
    it('works on arrays', () => {
        expect(flatten_1.flatten([[1, 2, 3, 4], [5, 6, 7], [8], 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
