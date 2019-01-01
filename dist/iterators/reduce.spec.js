"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = require("./reduce");
describe('scan', () => {
    it('works on iterables', () => {
        const r = reduce_1.reduce((a, b) => a + b, 0);
        expect(r([1, 2, 3, 4])).toEqual(10);
        expect(r((function* () {
            yield 1;
            yield -1;
            yield 3;
        })())).toEqual(3);
    });
});
