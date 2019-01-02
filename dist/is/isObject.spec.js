"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isObject', () => {
    it('Detects Obj', () => {
        expect(index_1.isObject({})).toBe(true);
        expect(index_1.isObject({ hello: 'world' })).toBe(true);
        expect(index_1.isObject([])).toBe(true);
        expect(index_1.isObject(() => ({}))).toBe(true);
        expect(index_1.isObject(Object.create(null))).toBe(true);
        expect(index_1.isObject(Object.prototype)).toBe(true);
        expect(index_1.isObject(new C())).toBe(true);
        expect(index_1.isObject(C)).toBe(true);
        expect(index_1.isObject(Math)).toBe(true);
        expect(index_1.isObject(new Map())).toBe(true);
        expect(index_1.isObject(Array.prototype)).toBe(true);
        expect(index_1.isObject(Object.create(Object.create(null)))).toBe(true);
    });
    it('Detects non-obj', () => {
        expect(index_1.isObject(2.5)).toBe(false);
        expect(index_1.isObject('string')).toBe(false);
        expect(index_1.isObject(null)).toBe(false);
        expect(index_1.isObject(undefined)).toBe(false);
        expect(index_1.isObject(NaN)).toBe(false);
        expect(index_1.isObject(Infinity)).toBe(false);
        expect(index_1.isObject(-Infinity)).toBe(false);
        expect(index_1.isObject(true)).toBe(false);
        expect(index_1.isObject(false)).toBe(false);
    });
});
// tslint:disable-next-line
function C() { }
