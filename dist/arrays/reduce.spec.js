"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = require("./reduce");
describe('reduce', () => {
    it('works on arrays', () => {
        const r = reduce_1.reduce((a, b) => a + b, 0);
        expect(r([1, 2, 3, 4])).toEqual(10);
    });
});
