"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isUndefined', () => {
    it('can detect undefined', () => {
        expect(index_1.isUndefined(undefined)).toBe(true);
    });
    it('returns false for everything else', () => {
        expect(index_1.isUndefined(null)).toBe(false);
        expect(index_1.isUndefined('string')).toBe(false);
        expect(index_1.isUndefined(() => ({}))).toBe(false);
        expect(index_1.isUndefined(5.34)).toBe(false);
        expect(index_1.isUndefined(false)).toBe(false);
        expect(index_1.isUndefined(0)).toBe(false);
        expect(index_1.isUndefined('')).toBe(false);
        expect(index_1.isUndefined(Symbol.iterator)).toBe(false);
        expect(index_1.isUndefined({})).toBe(false);
        expect(index_1.isUndefined([])).toBe(false);
    });
});
//# sourceMappingURL=isUndefined.spec.js.map