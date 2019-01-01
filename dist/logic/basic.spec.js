"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const fp_1 = require("../fp");
describe('Basic logic', () => {
    it('does and', () => {
        const arrs = [[true, true], [true, false], [false, true], [false, false], []];
        expect(arrs.map(fp_1.spread(basic_1.and))).toEqual([true, false, false, false, false]);
    });
    it('does or', () => {
        const arrs = [[true, true], [true, false], [false, true], [false, false], []];
        expect(arrs.map(fp_1.spread(basic_1.or))).toEqual([true, true, true, false, false]);
    });
    it('does xor', () => {
        const arrs = [[true, true], [true, false], [false, true], [false, false], []];
        expect(arrs.map(fp_1.spread(basic_1.xor))).toEqual([false, true, true, false, false]);
    });
    it('does negate', () => {
        const arrs = [true, false];
        expect(arrs.map(basic_1.negate)).toEqual([false, true]);
    });
    it('does negate all', () => {
        const arrs = [[true, false], [true], [false]];
        expect(arrs.map(fp_1.spread(basic_1.negateAll))).toEqual([[false, true], [false], [true]]);
    });
});
