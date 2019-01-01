"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNumber_1 = require("./isNumber");
describe('isNumber', () => {
    it('Detects Numbers', () => {
        expect(isNumber_1.isNumber(NaN)).toBe(true);
        expect(isNumber_1.isNumber(1)).toBe(true);
        expect(isNumber_1.isNumber(1.2)).toBe(true);
        expect(isNumber_1.isNumber(Infinity)).toBe(true);
        expect(isNumber_1.isNumber(-Infinity)).toBe(true);
    });
    it('Detects non-nums', () => {
        expect(isNumber_1.isNumber({})).toBe(false);
        expect(isNumber_1.isNumber(null)).toBe(false);
        expect(isNumber_1.isNumber(undefined)).toBe(false);
        expect(isNumber_1.isNumber('NaN')).toBe(false);
        expect(isNumber_1.isNumber(true)).toBe(false);
        expect(isNumber_1.isNumber(false)).toBe(false);
    });
});
