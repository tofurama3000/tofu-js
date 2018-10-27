"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = require("./tap");
describe('tap', () => {
    it('works on arrays', () => {
        let arr = [];
        const t = tap_1.tap((v) => arr.push(v));
        t([1, 2, 3, 4]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
});
//# sourceMappingURL=tap.spec.js.map