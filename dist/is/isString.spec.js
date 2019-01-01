"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isString_1 = require("./isString");
describe('isString', () => {
    it('Detects Strings', () => {
        expect(isString_1.isString('')).toBe(true);
        expect(isString_1.isString('str')).toBe(true);
        expect(isString_1.isString('123')).toBe(true);
    });
    it('Detects non-strings', () => {
        expect(isString_1.isString(2.5)).toBe(false);
        expect(isString_1.isString({})).toBe(false);
        expect(isString_1.isString(null)).toBe(false);
        expect(isString_1.isString(undefined)).toBe(false);
        expect(isString_1.isString(NaN)).toBe(false);
        expect(isString_1.isString(Infinity)).toBe(false);
        expect(isString_1.isString(-Infinity)).toBe(false);
        expect(isString_1.isString(true)).toBe(false);
        expect(isString_1.isString(false)).toBe(false);
    });
});
