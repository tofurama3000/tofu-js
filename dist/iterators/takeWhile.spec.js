"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const takeWhile_1 = require("./takeWhile");
describe('takeWhile', () => {
    it('will take while a function returns true', () => {
        const fn = (() => {
            let i = 0;
            return () => {
                if (i++ < 3)
                    return true;
                return false;
            };
        })();
        expect(collectToArray_1.collectToArray(takeWhile_1.takeWhile(fn, [1, 2, 3, 4, 5]))).toEqual([1, 2, 3]);
    });
    it('will take while an iterable is truthy', () => {
        expect(collectToArray_1.collectToArray(takeWhile_1.takeWhile([true, true, false], [1, 2, 3, 4, 5]))).toEqual([1, 2]);
    });
    it('will take while an iterable is not done', () => {
        expect(collectToArray_1.collectToArray(takeWhile_1.takeWhile([true, true, true], [1, 2, 3, 4, 5]))).toEqual([1, 2, 3]);
    });
    it('will take while a generator is truthy with input', () => {
        const gen = function* () {
            yield* [true, true, true, true, false];
        };
        expect(collectToArray_1.collectToArray(takeWhile_1.takeWhile(gen(), [1, 2, 3, 4, 5]))).toEqual([1, 2, 3, 4]);
    });
});
describe('takeWhilePullPush', () => {
    it('will work with a generator that takes input then yields output', () => {
        const gen = function* () {
            while (true) {
                yield (yield 3) - 3;
            }
        };
        expect(collectToArray_1.collectToArray(takeWhile_1.takeWhilePullPush(gen(), [1, 2, 3, 4, 5]))).toEqual([1, 2]);
    });
});
//# sourceMappingURL=takeWhile.spec.js.map