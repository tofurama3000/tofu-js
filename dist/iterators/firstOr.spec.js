"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstOr_1 = require("./firstOr");
describe('firstOr', () => {
    it('returns first item', () => {
        expect(firstOr_1.firstOr(6, [0])).toBe(0);
        expect(firstOr_1.firstOr(6, [1])).toBe(1);
    });
    it('returns default item', () => {
        expect(firstOr_1.firstOr(6, [])).toBe(6);
        expect(firstOr_1.firstOr(4, [])).toBe(4);
    });
});
