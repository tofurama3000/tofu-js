"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const is_1 = require("../is");
describe('curry', () => {
    it('returns a function', () => {
        const curryResult = index_1.curry(testFunction);
        expect(is_1.isFunction(curryResult)).toBe(true);
    });
    it('returns a function after partial application', () => {
        const curryResult = index_1.curry(testFunction);
        expect(is_1.isFunction(curryResult(3, 4))).toBe(true);
        expect(is_1.isFunction(curryResult(3)(4))).toBe(true);
        expect(is_1.isFunction(curryResult(3))).toBe(true);
    });
    it('returns a result after full application', () => {
        const curryResult = index_1.curry(testFunction);
        const answer = 3 + 4 + 5;
        expect(curryResult(3, 4, 5)).toBe(answer);
        expect(curryResult(3, 4)(5)).toBe(answer);
    });
    it('can pass additional parameters', () => {
        const curryResult = index_1.curry(testFunction);
        const answer = 3 + 4 + 5 + 6 + 7;
        expect(curryResult(3, 4, 5, 6, 7)).toBe(answer);
    });
});
function testFunction(x, y, z, ...a) {
    return x + y + z + a.reduce((b, c) => b + c, 0);
}
