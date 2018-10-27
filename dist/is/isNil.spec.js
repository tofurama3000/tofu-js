"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isNil', () => {
    it('can detect null', () => {
        expect(index_1.isNil(null)).toBe(true);
    });
    it('can detect undefined', () => {
        expect(index_1.isNil(undefined)).toBe(true);
    });
    it('returns false for everything else', () => {
        expect(index_1.isNil('string')).toBe(false);
        expect(index_1.isNil(() => ({}))).toBe(false);
        expect(index_1.isNil(5.34)).toBe(false);
        expect(index_1.isNil(false)).toBe(false);
        expect(index_1.isNil(0)).toBe(false);
        expect(index_1.isNil('')).toBe(false);
        expect(index_1.isNil(Symbol.iterator)).toBe(false);
        expect(index_1.isNil({})).toBe(false);
        expect(index_1.isNil([])).toBe(false);
    });
});
//# sourceMappingURL=isNil.spec.js.map