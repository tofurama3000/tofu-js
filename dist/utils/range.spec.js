"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('range', () => {
    it('generates with just one input', () => {
        expect(index_1.range(5)).toEqual([0, 1, 2, 3, 4]);
    });
    it('generates range from and to', () => {
        expect(index_1.range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it('generates range from and to by step', () => {
        expect(index_1.range(1, 6, 2)).toEqual([1, 3, 5]);
        expect(index_1.range(1, 7, 2)).toEqual([1, 3, 5]);
        expect(index_1.range(1, 7, -2)).toEqual([1, 3, 5]);
    });
    it('generates can step in the negative direction', () => {
        expect(index_1.range(-4)).toEqual([0, -1, -2, -3]);
        expect(index_1.range(7, 1, 2)).toEqual([7, 5, 3]);
        expect(index_1.range(7, 1, -2)).toEqual([7, 5, 3]);
    });
    it('returns [] when passed 0', () => {
        expect(index_1.range(0)).toEqual([]);
    });
    it('returns [start] when passed too big of a step', () => {
        expect(index_1.range(1, 5, 10)).toEqual([1]);
    });
});
//# sourceMappingURL=range.spec.js.map