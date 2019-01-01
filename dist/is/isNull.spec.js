"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isNull', () => {
    it('can detect null', () => {
        expect(index_1.isNull(null)).toBe(true);
    });
    it('returns false for everything else', () => {
        expect(index_1.isNull(undefined)).toBe(false);
        expect(index_1.isNull('string')).toBe(false);
        expect(index_1.isNull(() => ({}))).toBe(false);
        expect(index_1.isNull(5.34)).toBe(false);
        expect(index_1.isNil(false)).toBe(false);
        expect(index_1.isNil(0)).toBe(false);
        expect(index_1.isNil('')).toBe(false);
        expect(index_1.isNull(Symbol.iterator)).toBe(false);
        expect(index_1.isNull({})).toBe(false);
        expect(index_1.isNull([])).toBe(false);
    });
});
