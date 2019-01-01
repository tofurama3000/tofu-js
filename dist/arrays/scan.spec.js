"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scan_1 = require("./scan");
describe('scan', () => {
    it('works on arrays', () => {
        const s = scan_1.scan((a, b) => a + b, 0);
        expect(s([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    });
});
