"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectToArray_1 = require("./collectToArray");
const take_1 = require("./take");
describe('take', () => {
    it('takes only the first n', () => {
        const t3 = take_1.take(3);
        const t4 = take_1.take(4);
        const arr = [0, 1, 2, 3, 4, 5];
        const gen = function* () {
            yield* arr;
        };
        expect(collectToArray_1.collectToArray(t3(arr))).toEqual(arr.slice(0, 3));
        expect(collectToArray_1.collectToArray(t4(arr))).toEqual(arr.slice(0, 4));
        expect(collectToArray_1.collectToArray(t3(gen()))).toEqual(arr.slice(0, 3));
        expect(collectToArray_1.collectToArray(t4(gen()))).toEqual(arr.slice(0, 4));
    });
});
//# sourceMappingURL=take.spec.js.map