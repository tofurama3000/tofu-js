"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entries_1 = require("./entries");
describe('entries', () => {
    it('works on objects', () => {
        expect(entries_1.entries({})).toEqual([]);
        expect(entries_1.entries({ a: 4 })).toEqual([['a', 4]]);
        expect(entries_1.entries({ a: 4, b: 6 })).toEqual([['a', 4], ['b', 6]]);
    });
    it('works on maps', () => {
        expect(entries_1.entries(new Map([]))).toEqual([]);
        expect(entries_1.entries(new Map([['a', 4], ['9', 12]]))).toEqual([['a', 4], ['9', 12]]);
    });
    it('works on sets', () => {
        expect(entries_1.entries(new Set([]))).toEqual([]);
        expect(entries_1.entries(new Set([1, 2, 4, 4]))).toEqual([[1, 1], [2, 2], [4, 4]]);
    });
    it('works on arrays', () => {
        expect(entries_1.entries([])).toEqual([]);
        expect(entries_1.entries([1, 2])).toEqual([[0, 1], [1, 2]]);
    });
    it('does not work on other things', () => {
        expect(entries_1.entries(2)).toEqual([]);
        expect(entries_1.entries(null)).toEqual([]);
        expect(entries_1.entries('Hello')).toEqual([]);
    });
});
//# sourceMappingURL=entries.spec.js.map