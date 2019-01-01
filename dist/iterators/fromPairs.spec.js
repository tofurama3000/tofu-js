"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromPairs_1 = require("./fromPairs");
const firstOrNull_1 = require("./firstOrNull");
describe('fromPairs', () => {
    it('works for iterables', () => {
        expect(firstOrNull_1.firstOrNull(fromPairs_1.fromPairs([]))).toEqual({});
        expect(firstOrNull_1.firstOrNull(fromPairs_1.fromPairs([[5, 4], ['hello', 'world']]))).toEqual({ 5: 4, hello: 'world' });
    });
});
