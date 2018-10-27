"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
describe('map', () => {
    it('works on arrays', () => {
        const m = map_1.map(x => x + 1);
        expect(m([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
    });
});
//# sourceMappingURL=map.spec.js.map