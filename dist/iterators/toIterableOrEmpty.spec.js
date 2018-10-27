"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toIterableOrEmpty_1 = require("./toIterableOrEmpty");
const collectToArray_1 = require("./collectToArray");
describe('toIterableOrEmpty', () => {
    it('passes iterables through', () => {
        const iter = [1, 2, 3];
        expect(toIterableOrEmpty_1.toIterableOrEmpty(iter)).toBe(iter); // reference should be the same
    });
    it('returns an empty iterable if given a non iterable', () => {
        expect(collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty(undefined))).toEqual([]);
        expect(collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty(null))).toEqual([]);
        expect(collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty(23))).toEqual([]);
        expect(collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty('hello'))).toEqual([]);
        expect(collectToArray_1.collectToArray(toIterableOrEmpty_1.toIterableOrEmpty({}))).toEqual([]);
    });
});
//# sourceMappingURL=toIterableOrEmpty.spec.js.map