"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterators_1 = require("../iterators");
const lazyRange_1 = require("./lazyRange");
describe('lazyRange', () => {
    it('generates with just one input', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(5))).toEqual([0, 1, 2, 3, 4]);
    });
    it('generates range from and to', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, 5))).toEqual([1, 2, 3, 4]);
    });
    it('generates range from and to by step', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, 6, 2))).toEqual([1, 3, 5]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, 7, 2))).toEqual([1, 3, 5]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, 7, -2))).toEqual([1, 3, 5]);
    });
    it('generates can step in the negative direction', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(-4))).toEqual([0, -1, -2, -3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(7, 1, 2))).toEqual([7, 5, 3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(7, 1, -2))).toEqual([7, 5, 3]);
    });
    it('returns [] when passed 0', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(0))).toEqual([]);
    });
    it('returns [start] when passed too big of a step', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, 5, 10))).toEqual([1]);
    });
    it('returns [start, start+1, start+2, ...] as an infinite sequence', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, Infinity, 2), 6)).toEqual([1, 3, 5, 7, 9, 11]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(1, Infinity), 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('returns [0, 1, 2, ...] as an infinite sequence', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(), 6)).toEqual([0, 1, 2, 3, 4, 5]);
    });
    it('returns [start, start-1, start-2, ...] as an infinite sequence', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(10, -Infinity, 2), 6)).toEqual([10, 8, 6, 4, 2, 0]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(10, -Infinity), 10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
    it('returns [start, start+1, start-1, start+2, start-2, ...] as an infinite sequence', () => {
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(Infinity, -Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(Infinity, -Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(Infinity, Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(Infinity, Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(-Infinity, Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(-Infinity, Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(-Infinity, -Infinity), 7)).toEqual([0, 1, -1, 2, -2, 3, -3]);
        expect(iterators_1.collectToArray(lazyRange_1.lazyRange(-Infinity, -Infinity, 2), 7)).toEqual([0, 2, -2, 4, -4, 6, -6]);
    });
});
//# sourceMappingURL=lazyRange.spec.js.map