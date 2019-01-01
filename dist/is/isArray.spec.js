"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isArray_1 = require("./isArray");
describe('isArray', () => {
    it('Detects Floats', () => {
        expect(isArray_1.isArray(Array(5))).toBe(true);
        expect(isArray_1.isArray(Array())).toBe(true);
        expect(isArray_1.isArray([])).toBe(true);
        expect(isArray_1.isArray([5])).toBe(true);
    });
    it('Detects non-floats', () => {
        expect(isArray_1.isArray(1)).toBe(false);
        expect(isArray_1.isArray(1.2)).toBe(false);
        expect(isArray_1.isArray(Infinity)).toBe(false);
        expect(isArray_1.isArray(-Infinity)).toBe(false);
        expect(isArray_1.isArray(NaN)).toBe(false);
        expect(isArray_1.isArray({})).toBe(false);
        expect(isArray_1.isArray(null)).toBe(false);
        expect(isArray_1.isArray(undefined)).toBe(false);
        expect(isArray_1.isArray('NaN')).toBe(false);
        expect(isArray_1.isArray(true)).toBe(false);
        expect(isArray_1.isArray(false)).toBe(false);
    });
});
