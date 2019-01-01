"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const join_1 = require("./join");
describe('join', () => {
    it('works on arrays', () => {
        expect(join_1.join(',', [1, 2, 3])).toBe('1,2,3');
        expect(join_1.join(' ', [0, 1, 2, 3])).toBe('0 1 2 3');
    });
});
