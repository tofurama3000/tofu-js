"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("../is");
const index_1 = require("./index");
describe('reverseCurry', () => {
    it('returns a function', () => {
        const curryResult = index_1.reverseCurry(testFunction);
        expect(is_1.isFunction(curryResult)).toBe(true);
    });
    it('returns a function after partial application', () => {
        const curryResult = index_1.reverseCurry(testFunction);
        expect(is_1.isFunction(curryResult('a', 'b'))).toBe(true);
        expect(is_1.isFunction(curryResult('a')('b'))).toBe(true);
        expect(is_1.isFunction(curryResult('a'))).toBe(true);
    });
    it('returns a result after full application', () => {
        const curryResult = index_1.reverseCurry(testFunction);
        const answer = 'cba';
        expect(curryResult('a', 'b', 'c')).toBe(answer);
        expect(curryResult('a', 'b')('c')).toBe(answer);
    });
});
function testFunction(a, b, c) {
    return a + b + c;
}
