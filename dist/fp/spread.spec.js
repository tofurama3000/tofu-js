"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spread_1 = require("./spread");
describe('spread', () => {
    it('spreads', () => {
        const f = (...t) => t.reduce((a, c) => a + c, 0);
        expect(spread_1.spread(f)([1, 2, 3])).toBe(6);
        expect(spread_1.spread(f)([1, 2, 3, 4])).toBe(10);
    });
});
