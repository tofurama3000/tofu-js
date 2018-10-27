"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('limit', () => {
    it('works on arrays', () => {
        expect(index_1.limit(2, [1, 2, 3, 4])).toEqual([1, 2]);
    });
});
//# sourceMappingURL=limit.spec.js.map