"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFloat_1 = require("./isFloat");
describe('isFloat', () => {
    it('Detects Floats', () => {
        expect(isFloat_1.isFloat(1)).toBe(true);
        expect(isFloat_1.isFloat(1.2)).toBe(true);
        expect(isFloat_1.isFloat(Infinity)).toBe(true);
        expect(isFloat_1.isFloat(-Infinity)).toBe(true);
        expect(isFloat_1.isFloat(NaN)).toBe(true);
    });
    it('Detects non-floats', () => {
        expect(isFloat_1.isFloat({})).toBe(false);
        expect(isFloat_1.isFloat(null)).toBe(false);
        expect(isFloat_1.isFloat(undefined)).toBe(false);
        expect(isFloat_1.isFloat('NaN')).toBe(false);
        expect(isFloat_1.isFloat(true)).toBe(false);
        expect(isFloat_1.isFloat(false)).toBe(false);
    });
});
//# sourceMappingURL=isFloat.spec.js.map