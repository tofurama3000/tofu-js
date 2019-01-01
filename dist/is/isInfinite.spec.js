"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isInfinite', () => {
    it('Works for +Infinity', () => {
        expect(index_1.isInfinite(Infinity)).toBe(true);
        expect(index_1.isInfinite(+Infinity)).toBe(true);
        expect(index_1.isInfinite(Infinity + 1)).toBe(true);
    });
    it('Works for -Infinity', () => {
        expect(index_1.isInfinite(-Infinity)).toBe(true);
        expect(index_1.isInfinite(-Infinity + 1)).toBe(true);
        expect(index_1.isInfinite(+-Infinity)).toBe(true);
        expect(index_1.isInfinite(-+Infinity)).toBe(true);
    });
    it('Works for divide by 0', () => {
        expect(index_1.isInfinite(10 / 0)).toBe(true);
    });
    it('Detects non-infinity', () => {
        expect(index_1.isInfinite(10 / 2)).toBe(false);
        expect(index_1.isInfinite('string')).toBe(false);
        expect(index_1.isInfinite({})).toBe(false);
        expect(index_1.isInfinite([])).toBe(false);
        expect(index_1.isInfinite(NaN)).toBe(false);
    });
});
