"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicate_1 = require("./predicate");
describe('predicate', () => {
    describe('or', () => {
        it('can accept 2 functions', () => {
            expect(predicate_1.or(T, T)(5)).toBe(true);
            expect(predicate_1.or(T, F)(5)).toBe(true);
            expect(predicate_1.or(F, T)(5)).toBe(true);
            expect(predicate_1.or(F, F)(5)).toBe(false);
        });
        it('can accept many functions', () => {
            expect(predicate_1.or(F, F, T)(5)).toBe(true);
            expect(predicate_1.or(F, F, F)(5)).toBe(false);
            expect(predicate_1.or(F, F, F, T)(5)).toBe(true);
            expect(predicate_1.or(F, F, F, F)(5)).toBe(false);
        });
    });
    describe('and', () => {
        it('can accept 2 functions', () => {
            expect(predicate_1.and(T, T)(5)).toBe(true);
            expect(predicate_1.and(T, F)(5)).toBe(false);
            expect(predicate_1.and(F, T)(5)).toBe(false);
            expect(predicate_1.and(F, F)(5)).toBe(false);
        });
        it('can accept many functions', () => {
            expect(predicate_1.and(T, T, T)(5)).toBe(true);
            expect(predicate_1.and(F, F, T)(5)).toBe(false);
            expect(predicate_1.and(F, F, F)(5)).toBe(false);
            expect(predicate_1.and(T, T, T, T)(5)).toBe(true);
            expect(predicate_1.and(F, F, F, T)(5)).toBe(false);
            expect(predicate_1.and(F, F, F, F)(5)).toBe(false);
        });
    });
    describe('xor', () => {
        it('can accept 2 functions', () => {
            expect(predicate_1.xor(T, T)(5)).toBe(false);
            expect(predicate_1.xor(T, F)(5)).toBe(true);
            expect(predicate_1.xor(F, T)(5)).toBe(true);
            expect(predicate_1.xor(F, F)(5)).toBe(false);
        });
        it('can accept many functions', () => {
            expect(predicate_1.xor(T, T, T)(5)).toBe(false);
            expect(predicate_1.xor(F, F, T)(5)).toBe(true);
            expect(predicate_1.xor(F, F, F)(5)).toBe(false);
            expect(predicate_1.xor(T, T, T, T)(5)).toBe(false);
            expect(predicate_1.xor(F, F, F, T)(5)).toBe(true);
            expect(predicate_1.xor(F, F, F, F)(5)).toBe(false);
        });
    });
    describe('negate', () => {
        it('negates the output', () => {
            expect(predicate_1.negate(T)(5)).toBe(false);
            expect(predicate_1.negate(F)(5)).toBe(true);
        });
    });
    describe('toPredicate', () => {
        it('converts predicate to output', () => {
            expect(predicate_1.toPredicate(NonPredicate)(5)).toBe(false);
            expect(predicate_1.toPredicate(NonPredicate)(6)).toBe(true);
        });
    });
    describe('boolToPredicate', () => {
        it('converts bool to predicate', () => {
            expect(predicate_1.boolToPredicate(true)(6)).toBe(true);
            expect(predicate_1.boolToPredicate(false)(5)).toBe(false);
        });
    });
});
function T(_) {
    return true;
}
function F(_) {
    return false;
}
function NonPredicate(val) {
    return val - 5;
}
