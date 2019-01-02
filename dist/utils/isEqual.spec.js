"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_1 = require("./clone");
const isEqual_1 = require("./isEqual");
describe('isEqual', () => {
    it('works on obj', () => {
        const obj = { a: { foo: 'bar' } };
        const clone = clone_1.cloneDeep(obj);
        expect(isEqual_1.isEqual(obj, clone)).toBe(true);
    });
    it('works on arrays', () => {
        const arr = [{ foo: 'bar' }];
        const clone = clone_1.cloneDeep(arr);
        expect(isEqual_1.isEqual(arr, clone)).toBe(true);
    });
});
