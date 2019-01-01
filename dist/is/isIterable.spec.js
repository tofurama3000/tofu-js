"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isIterable', () => {
    it('Detects Iterables', () => {
        expect(index_1.isIterable((function* () {
            yield 1;
        })())).toBe(true);
        expect(index_1.isIterable({ [Symbol.iterator]: () => ({}) })).toBe(true);
        expect(index_1.isIterable([])).toBe(true);
        expect(index_1.isIterable(new Map())).toBe(true);
    });
    it('Detects non-iterables', () => {
        expect(index_1.isIterable(2.5)).toBe(false);
        expect(index_1.isIterable('string')).toBe(false);
        expect(index_1.isIterable(null)).toBe(false);
        expect(index_1.isIterable(undefined)).toBe(false);
        expect(index_1.isIterable(NaN)).toBe(false);
        expect(index_1.isIterable(Infinity)).toBe(false);
        expect(index_1.isIterable(-Infinity)).toBe(false);
        expect(index_1.isIterable(true)).toBe(false);
        expect(index_1.isIterable(false)).toBe(false);
        expect(index_1.isIterable({})).toBe(false);
        expect(index_1.isIterable(() => ({}))).toBe(false);
        expect(index_1.isIterable({ [Symbol.iterator]: {} })).toBe(false);
    });
});
