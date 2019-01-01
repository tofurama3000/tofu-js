"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromPairs_1 = require("./fromPairs");
describe('fromPairs', () => {
    it('works for arrays', () => {
        expect(fromPairs_1.fromPairs([])).toEqual({});
        expect(fromPairs_1.fromPairs([[5, 4], ['hello', 'world']])).toEqual({ 5: 4, hello: 'world' });
    });
});
