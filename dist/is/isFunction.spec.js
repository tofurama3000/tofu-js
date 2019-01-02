"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class TestClass {
    constructor() {
        this.val = 5;
    }
}
describe('isFunction', () => {
    it('can detect function declarations', () => {
        function testFunc() {
            return 5;
        }
        expect(index_1.isFunction(testFunc)).toBe(true);
    });
    it('can detect function expressions', () => {
        const testFunc = function () {
            return 5;
        };
        expect(index_1.isFunction(testFunc)).toBe(true);
    });
    it('can detect arrow functions', () => {
        const testFunc = () => ({});
        expect(index_1.isFunction(testFunc)).toBe(true);
    });
    it('can detect async functions', () => {
        const testFunc = async () => await Promise.resolve(4);
        expect(index_1.isFunction(testFunc)).toBe(true);
    });
    it('can detect generator functions', () => {
        const testFunc = function* () {
            yield 4;
        };
        expect(index_1.isFunction(testFunc)).toBe(true);
    });
    it('can detect constructors', () => {
        expect(index_1.isFunction(Proxy)).toBe(true);
        expect(index_1.isFunction(Number)).toBe(true);
        expect(index_1.isFunction(String)).toBe(true);
        expect(index_1.isFunction(TestClass)).toBe(true);
    });
    it('returns false for null', () => {
        expect(index_1.isFunction(null)).toBe(false);
    });
    it('returns false for undefined', () => {
        expect(index_1.isFunction(undefined)).toBe(false);
    });
    it('returns false for primitives and obj', () => {
        expect(index_1.isFunction('string')).toBe(false);
        expect(index_1.isFunction(5.34)).toBe(false);
        expect(index_1.isFunction(Symbol.iterator)).toBe(false);
        expect(index_1.isFunction(false)).toBe(false);
        expect(index_1.isFunction(0)).toBe(false);
        expect(index_1.isFunction('')).toBe(false);
        expect(index_1.isFunction({})).toBe(false);
        expect(index_1.isFunction([])).toBe(false);
    });
});
