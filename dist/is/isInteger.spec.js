"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isInteger_1 = require("./isInteger");
describe('isInteger', () => {
    it('Detects Integers', () => {
        expect(isInteger_1.isInteger(1)).toBe(true);
    });
    it('Detects non-ints', () => {
        expect(isInteger_1.isInteger(2.5)).toBe(false);
        expect(isInteger_1.isInteger({})).toBe(false);
        expect(isInteger_1.isInteger(null)).toBe(false);
        expect(isInteger_1.isInteger(undefined)).toBe(false);
        expect(isInteger_1.isInteger('NaN')).toBe(false);
        expect(isInteger_1.isInteger(true)).toBe(false);
        expect(isInteger_1.isInteger(false)).toBe(false);
        expect(isInteger_1.isInteger(NaN)).toBe(false);
        expect(isInteger_1.isInteger(1.2)).toBe(false);
        expect(isInteger_1.isInteger(Infinity)).toBe(false);
        expect(isInteger_1.isInteger(-Infinity)).toBe(false);
    });
});
