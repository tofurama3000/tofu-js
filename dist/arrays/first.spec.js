"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = require("./first");
describe('first', () => {
    it('returns just the first element or nothing', () => {
        expect(first_1.first([0, 3])).toEqual(0);
        expect(first_1.first([])).toEqual(null);
    });
});
//# sourceMappingURL=first.spec.js.map